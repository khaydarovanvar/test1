# Why Do We Need Mathematics? — running the lesson

Two languages (English / O‘zbekcha, toggle in the top bar or press **L**) and, once
deployed, live voting from students' phones.

## Files

| File | What it is |
|---|---|
| `why-do-we-need-mathematics.html` | The presentation. This is the page you project. |
| `vote.html` | The page students open on their phones. |
| `netlify/functions/vote.mjs` | The tiny server that collects votes. |
| `netlify.toml` | Routing: `/` → the presentation, `/v` → the student page, `/api/*` → the function. |

Everything works offline as a single file too — open `why-do-we-need-mathematics.html`
in any browser and count hands yourself by tapping the answers. Deploying only adds
the phone voting.

## Deploy to Netlify (about three minutes, free)

**Option A — connect the repo (recommended, redeploys on every push)**

1. Go to <https://app.netlify.com> → **Add new site** → **Import an existing project**.
2. Pick GitHub and choose this repository and this branch.
3. Leave the build command empty. Publish directory `.`, functions directory
   `netlify/functions` — `netlify.toml` already sets both.
4. **Deploy**. You get an address like `https://your-name.netlify.app`.

**Option B — drag and drop**

Download this folder and drag it onto the Netlify dashboard. Functions are picked up
from `netlify/functions` automatically.

Nothing else to configure: the vote storage (Netlify Blobs) is switched on for
deployed sites by default, with no account keys and no database to set up.

## Running live voting in class

1. Open your `netlify.app` address on the projector.
2. Press **P** for the presenter panel → **Turn on** next to *Live voting*.
3. A full-screen **join screen** appears automatically: a big QR code, the link
   (`yoursite.netlify.app/v`) and a 4-character class code, with the three steps
   written on screen for the students. Leave it up until the "votes in" counter
   stops climbing, then press **J** (or the button) to return to the lesson.
   Press **J** any time to bring the join screen back for latecomers.
4. Walk to a voting section. The question appears on every phone automatically —
   in whichever language your screen is set to.
5. Say *"everyone vote now"*, wait, then press **Show the class** to reveal the bars.
   Until you press it the class sees nothing — only the running "N votes" count, so
   nobody copies the crowd.
6. **↺ Reset** on the section clears that question; **Clear all votes** in the panel
   clears the whole room.

Four sections vote live: **01** the opening poll, **07** cash vs. financed,
**08** the $650/month advert, **10** $1,000 vs. the doubling dollar. Everything else
(quizzes, sliders, the rapid-fire round) runs on your screen as before.

Votes are anonymous — a phone stores a random id in its own browser so a student can
change their mind, and nothing else is recorded. No login, no names, no personal data.

### If a phone shows "reconnecting…"

School Wi-Fi, usually. Phones retry every 5 seconds on their own. If the network is
hopeless, turn live voting off and tap the answers yourself while students raise
hands — the same bars appear.

### Free-tier note

Each phone checks in every 5 seconds while the tab is open. A 45-minute lesson with
30 students is roughly 10–15 thousand function calls; Netlify's free tier allows
125,000 per month, so about eight to ten live lessons a month. Turn live voting off
when you are not using it and nothing is consumed.

## Keyboard

| Key | Action |
|---|---|
| `→` `←` `Space` | Next / previous section |
| `F` | Fullscreen |
| `P` | Presenter panel (jump list, timer, live voting) |
| `R` | Reset the interactive parts of the current section |
| `J` | Show / hide the student join screen (when live voting is on) |
| `L` | Switch English ⇄ O‘zbekcha |
