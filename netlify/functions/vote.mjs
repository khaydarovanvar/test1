/**
 * Classroom live-vote endpoint.
 *
 * One blob per vote, with the chosen option encoded in the key:
 *     <room>/p/<pollId>/<optionIndex>/<voterId>
 * Counting is a single prefix list, and two students voting at the same
 * instant write different keys — so there is no read-modify-write race and
 * no vote can be lost.
 *
 * Routes (via the /api/* redirect in netlify.toml):
 *   GET  /api/state?room=ABCD          -> { poll, title, options, counts, voters }
 *   POST /api/open   {room, poll, title, options}
 *   POST /api/vote   {room, poll, option, voter}
 *   POST /api/close  {room}
 *   POST /api/reset  {room, poll}      -> poll omitted clears the whole room
 */
import { getStore } from "@netlify/blobs";

const ROOM = /^[A-Z0-9]{4,6}$/;
const POLL = /^[a-z0-9_-]{1,24}$/;
const VOTER = /^[a-z0-9]{6,24}$/;
const MAX_OPTIONS = 8;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });

const bad = (msg) => json({ ok: false, error: msg }, 400);

export default async (req) => {
  const url = new URL(req.url);
  const action = url.pathname.split("/").filter(Boolean).pop();
  const store = getStore({ name: "mathvote", consistency: "strong" });

  let body = {};
  if (req.method === "POST") {
    try { body = await req.json(); } catch { return bad("bad json"); }
  }

  const room = String(body.room || url.searchParams.get("room") || "").toUpperCase();
  if (!ROOM.test(room)) return bad("bad room code");

  const openKey = `${room}/open`;

  // ── teacher opens a question ──────────────────────────────────────────────
  if (action === "open") {
    const poll = String(body.poll || "");
    if (!POLL.test(poll)) return bad("bad poll id");
    const options = Array.isArray(body.options) ? body.options.slice(0, MAX_OPTIONS).map((o) => String(o).slice(0, 160)) : [];
    if (!options.length) return bad("no options");
    const title = String(body.title || "").slice(0, 240);
    await store.setJSON(openKey, { poll, options, title, at: Date.now() });
    return json({ ok: true, poll, options, title });
  }

  // ── teacher closes voting ─────────────────────────────────────────────────
  if (action === "close") {
    await store.setJSON(openKey, { poll: "", options: [], title: "", at: Date.now() });
    return json({ ok: true });
  }

  // ── a student votes (re-voting replaces their earlier choice) ─────────────
  if (action === "vote") {
    const poll = String(body.poll || "");
    const voter = String(body.voter || "");
    const option = Number(body.option);
    if (!POLL.test(poll)) return bad("bad poll id");
    if (!VOTER.test(voter)) return bad("bad voter id");
    if (!Number.isInteger(option) || option < 0 || option >= MAX_OPTIONS) return bad("bad option");

    const prefix = `${room}/p/${poll}/`;
    const { blobs } = await store.list({ prefix });
    await Promise.all(
      blobs
        .filter((b) => b.key.endsWith(`/${voter}`) && b.key !== `${prefix}${option}/${voter}`)
        .map((b) => store.delete(b.key))
    );
    await store.set(`${prefix}${option}/${voter}`, "1");
    return json({ ok: true, poll, option });
  }

  // ── teacher clears one poll, or the whole room ────────────────────────────
  if (action === "reset") {
    const poll = body.poll ? String(body.poll) : "";
    if (poll && !POLL.test(poll)) return bad("bad poll id");
    const prefix = poll ? `${room}/p/${poll}/` : `${room}/`;
    const { blobs } = await store.list({ prefix });
    await Promise.all(blobs.map((b) => store.delete(b.key)));
    if (!poll) await store.setJSON(openKey, { poll: "", options: [], title: "", at: Date.now() });
    return json({ ok: true, cleared: blobs.length });
  }

  // ── everyone reads the room state ─────────────────────────────────────────
  if (action === "state" || req.method === "GET") {
    const open = (await store.get(openKey, { type: "json" })) || { poll: "", options: [], title: "", at: 0 };
    const counts = [];
    let voters = 0;
    if (open.poll) {
      const { blobs } = await store.list({ prefix: `${room}/p/${open.poll}/` });
      for (const b of blobs) {
        const parts = b.key.split("/");
        const i = Number(parts[parts.length - 2]);
        if (Number.isInteger(i)) { counts[i] = (counts[i] || 0) + 1; voters++; }
      }
    }
    for (let i = 0; i < (open.options.length || 0); i++) if (!counts[i]) counts[i] = 0;
    return json({ ok: true, room, poll: open.poll, title: open.title || "", options: open.options, counts, voters, at: open.at });
  }

  return bad("unknown action");
};

export const config = { path: "/.netlify/functions/vote/*" };
