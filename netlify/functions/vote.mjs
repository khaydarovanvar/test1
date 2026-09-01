/**
 * Classroom live-vote endpoint. Zero npm dependencies.
 *
 * Storage: Netlify Blobs. The official SDK is used when it is installed
 * (git-based deploys with package.json); otherwise the function talks to the
 * Blobs endpoint directly using the credentials Netlify injects into every
 * deployed function via NETLIFY_BLOBS_CONTEXT — so drag-and-drop deploys work
 * too, with no build step and no node_modules.
 *
 * One blob per vote, the chosen option encoded in the key:
 *     <room>.p.<pollId>.<optionIndex>.<voterId>
 * Counting is a prefix list, and two students voting at the same instant
 * write different keys — no read-modify-write race, no lost votes.
 *
 * Routes (via the /api/* redirect in netlify.toml):
 *   GET  /api/health                   -> { ok, blobs, mode, detail }
 *   GET  /api/state?room=ABCD          -> { poll, title, options, counts, voters }
 *   POST /api/open   {room, poll, title, options}
 *   POST /api/vote   {room, poll, option, voter}
 *   POST /api/close  {room}
 *   POST /api/reset  {room, poll?}
 */

const STORE = "mathvote";
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

/* ── storage: SDK when available, raw Blobs endpoint otherwise ────────────── */

async function sdkStore() {
  const { getStore } = await import("@netlify/blobs");
  const s = getStore({ name: STORE, consistency: "strong" });
  return {
    mode: "sdk",
    get: (k) => s.get(k),
    set: (k, v) => s.set(k, v),
    del: (k) => s.delete(k),
    list: async (prefix) => {
      const { blobs } = await s.list({ prefix });
      return blobs.map((b) => b.key);
    }
  };
}

function rawStore() {
  const rawCtx = process.env.NETLIFY_BLOBS_CONTEXT;
  if (!rawCtx) throw new Error("NETLIFY_BLOBS_CONTEXT is not set");
  const ctx = JSON.parse(Buffer.from(rawCtx, "base64").toString("utf8"));
  const base = ctx.uncachedEdgeURL || ctx.edgeURL;
  if (!base || !ctx.token || !ctx.siteID) throw new Error("blobs context incomplete");
  const head = { authorization: `Bearer ${ctx.token}` };
  const keyURL = (k) => `${base}/${ctx.siteID}/${STORE}/${encodeURIComponent(k)}`;
  return {
    mode: "http",
    get: async (k) => {
      const r = await fetch(keyURL(k), { headers: head });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error("blobs get " + r.status);
      return r.text();
    },
    set: async (k, v) => {
      const r = await fetch(keyURL(k), { method: "PUT", headers: head, body: v });
      if (!r.ok) throw new Error("blobs put " + r.status);
    },
    del: async (k) => {
      const r = await fetch(keyURL(k), { method: "DELETE", headers: head });
      if (!r.ok && r.status !== 404) throw new Error("blobs delete " + r.status);
    },
    list: async (prefix) => {
      const keys = [];
      let cursor = "";
      for (let i = 0; i < 20; i++) {
        const u = `${base}/${ctx.siteID}/${STORE}?prefix=${encodeURIComponent(prefix)}` +
                  (cursor ? `&cursor=${encodeURIComponent(cursor)}` : "");
        const r = await fetch(u, { headers: head });
        if (!r.ok) throw new Error("blobs list " + r.status);
        const d = await r.json();
        for (const b of d.blobs || []) keys.push(b.key);
        cursor = d.next_cursor || "";
        if (!cursor) break;
      }
      return keys;
    }
  };
}

async function store() {
  try { return await sdkStore(); } catch (e) { /* SDK not installed — use raw */ }
  return rawStore();
}

/* ── handler ──────────────────────────────────────────────────────────────── */

export default async (req) => {
  const url = new URL(req.url);
  const action = url.pathname.split("/").filter(Boolean).pop();

  if (action === "health") {
    try {
      const s = await store();
      const probe = "health.check";
      await s.set(probe, String(Date.now()));
      const back = await s.get(probe);
      await s.del(probe);
      return json({ ok: true, blobs: back != null, mode: s.mode });
    } catch (e) {
      return json({ ok: true, blobs: false, mode: "none", detail: String(e && e.message || e) });
    }
  }

  let body = {};
  if (req.method === "POST") {
    try { body = await req.json(); } catch { return bad("bad json"); }
  }
  const room = String(body.room || url.searchParams.get("room") || "").toUpperCase();
  if (!ROOM.test(room)) return bad("bad room code");

  let s;
  try { s = await store(); } catch (e) { return json({ ok: false, error: "storage unavailable: " + String(e && e.message || e) }, 500); }

  const openKey = `${room}.open`;

  try {
    if (action === "open") {
      const poll = String(body.poll || "");
      if (!POLL.test(poll)) return bad("bad poll id");
      const options = Array.isArray(body.options) ? body.options.slice(0, MAX_OPTIONS).map((o) => String(o).slice(0, 160)) : [];
      if (!options.length) return bad("no options");
      const title = String(body.title || "").slice(0, 240);
      await s.set(openKey, JSON.stringify({ poll, options, title, at: Date.now() }));
      return json({ ok: true, poll, options, title });
    }

    if (action === "close") {
      await s.set(openKey, JSON.stringify({ poll: "", options: [], title: "", at: Date.now() }));
      return json({ ok: true });
    }

    if (action === "vote") {
      const poll = String(body.poll || "");
      const voter = String(body.voter || "");
      const option = Number(body.option);
      if (!POLL.test(poll)) return bad("bad poll id");
      if (!VOTER.test(voter)) return bad("bad voter id");
      if (!Number.isInteger(option) || option < 0 || option >= MAX_OPTIONS) return bad("bad option");
      const prefix = `${room}.p.${poll}.`;
      const mine = `${prefix}${option}.${voter}`;
      const keys = await s.list(prefix);
      await Promise.all(keys.filter((k) => k.endsWith(`.${voter}`) && k !== mine).map((k) => s.del(k)));
      await s.set(mine, "1");
      return json({ ok: true, poll, option });
    }

    if (action === "reset") {
      const poll = body.poll ? String(body.poll) : "";
      if (poll && !POLL.test(poll)) return bad("bad poll id");
      const keys = await s.list(poll ? `${room}.p.${poll}.` : `${room}.`);
      await Promise.all(keys.map((k) => s.del(k)));
      if (!poll) await s.set(openKey, JSON.stringify({ poll: "", options: [], title: "", at: Date.now() }));
      return json({ ok: true, cleared: keys.length });
    }

    // default: state
    let open = { poll: "", options: [], title: "", at: 0 };
    const rawOpen = await s.get(openKey);
    if (rawOpen) { try { open = JSON.parse(rawOpen); } catch (e) {} }
    const counts = [];
    let voters = 0;
    if (open.poll) {
      const keys = await s.list(`${room}.p.${open.poll}.`);
      for (const k of keys) {
        const parts = k.split(".");
        const i = Number(parts[parts.length - 2]);
        if (Number.isInteger(i)) { counts[i] = (counts[i] || 0) + 1; voters++; }
      }
    }
    for (let i = 0; i < (open.options.length || 0); i++) if (!counts[i]) counts[i] = 0;
    return json({ ok: true, room, poll: open.poll, title: open.title || "", options: open.options || [], counts, voters, at: open.at });
  } catch (e) {
    return json({ ok: false, error: "storage error: " + String(e && e.message || e) }, 500);
  }
};
