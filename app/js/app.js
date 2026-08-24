/* Router + shell. Hash routing keeps the app usable straight from file://. */

import { el, clear, toast, celebrate } from './ui.js';
import * as S from './state.js';
import { sfx } from './audio.js';
import { homeScreen } from './screens/home.js';
import { subjectScreen } from './screens/subject.js';
import { gamesScreen } from './screens/games.js';
import { trophiesScreen } from './screens/trophies.js';
import { mapScreen } from './screens/map.js';
import { printScreen } from './screens/print.js';
import { progressScreen } from './screens/progress.js';
import { parentScreen } from './screens/parent.js';
import { dailyScreen } from './screens/daily.js';
import { settingsScreen } from './screens/settings.js';
import { lessonById } from './content/curriculum.js';
import { playLesson } from './engine/lesson.js';
import { penaltyGame } from './games/penalty.js';
import { passGame } from './games/pass.js';
import { goalkeeperGame } from './games/goalkeeper.js';
import { wordBuilderGame } from './games/wordbuilder.js';
import { scoreboardGame } from './games/scoreboard.js';

const GAME_MAP = {
  penalty: penaltyGame,
  pass: passGame,
  keeper: goalkeeperGame,
  builder: wordBuilderGame,
  board: scoreboardGame,
};

const root = () => document.getElementById('app');

function route() {
  const hash = location.hash.replace(/^#\/?/, '') || 'home';
  const [name, param] = hash.split('/');
  const host = clear(root());
  window.scrollTo(0, 0);

  switch (name) {
    case 'home':     return host.append(homeScreen());
    case 'english':  return host.append(subjectScreen('english'));
    case 'math':     return host.append(subjectScreen('math'));
    case 'writing':  return host.append(subjectScreen('writing'));
    case 'games':    return host.append(gamesScreen());
    case 'trophies': return host.append(trophiesScreen());
    case 'map':      return host.append(mapScreen());
    case 'print':    return host.append(printScreen());
    case 'progress': return host.append(progressScreen());
    case 'parent':   return host.append(parentScreen());
    case 'daily':    return host.append(dailyScreen());
    case 'settings': return host.append(settingsScreen());

    case 'lesson': {
      const lesson = lessonById(param);
      if (!lesson) { location.hash = '#/home'; return; }
      if (!S.worldUnlocked(lesson.world)) {
        toast('Bu mashq hali yopiq 🔒', { emoji: '🔒', kind: 'warn' });
        location.hash = `#/${lesson.subject}`;
        return;
      }
      S.touchStreak();
      return playLesson(lesson, host, { onExit: () => { location.hash = `#/${lesson.subject}`; } });
    }

    case 'game': {
      const g = GAME_MAP[param];
      if (!g) { location.hash = '#/games'; return; }
      S.touchStreak();
      return g(host, () => { location.hash = '#/games'; });
    }

    default:
      location.hash = '#/home';
  }
}

/* Level-up / world-unlock celebration */
let lastLevel = S.levelInfo().level;
let lastTier = S.tier();
S.subscribe(() => {
  const lvl = S.levelInfo().level;
  const t = S.tier();
  if (lvl > lastLevel) {
    lastLevel = lvl;
    sfx.levelUp();
    setTimeout(() => celebrate(`LEVEL ${lvl}! ⭐`, '🚀'), 400);
  }
  if (t > lastTier) {
    lastTier = t;
    setTimeout(() => {
      const w = S.currentWorld();
      celebrate(`${w.name.toUpperCase()} UNLOCKED!`, w.emoji);
    }, 900);
  }
});

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/home';
  route();
  /* Unlock WebAudio on the first tap (browser autoplay policy). */
  const kick = () => { sfx.tap(); window.removeEventListener('pointerdown', kick); };
  window.addEventListener('pointerdown', kick);
});

/* Available in the console for debugging without touching the UI. */
window.AliFC = { state: S };
