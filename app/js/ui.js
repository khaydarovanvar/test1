/* Reusable UI atoms. Everything is plain DOM — no framework, no build step. */

export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.assign(node.dataset, v);
    else node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat(4)) {
    if (c === null || c === undefined || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return node;
}

export const clear = n => { while (n.firstChild) n.removeChild(n.firstChild); return n; };

/* Big child-friendly button */
export function bigButton({ emoji, label, sub, colour = 'green', onClick, href, disabled }) {
  const tag = href ? 'a' : 'button';
  const node = el(tag, {
    class: `big-btn c-${colour}${disabled ? ' is-locked' : ''}`,
    href, type: href ? null : 'button',
    disabled: disabled || null,
    onClick: disabled ? (e => e.preventDefault()) : onClick,
  },
    el('span', { class: 'big-btn__emoji' }, emoji),
    el('span', { class: 'big-btn__text' },
      el('span', { class: 'big-btn__label' }, label),
      sub ? el('span', { class: 'big-btn__sub' }, sub) : null,
    ),
    disabled ? el('span', { class: 'big-btn__lock' }, '🔒') : null,
  );
  return node;
}

export function card(props, ...children) {
  return el('div', { ...props, class: `card ${props.class || ''}` }, ...children);
}

/* Horizontal progress bar drawn like a pitch */
export function progressBar(pct, { label, value, colour } = {}) {
  const p = Math.max(0, Math.min(1, pct));
  return el('div', { class: 'pbar' },
    label ? el('div', { class: 'pbar__label' }, el('span', {}, label), el('span', { class: 'pbar__value' }, value ?? `${Math.round(p * 100)}%`)) : null,
    el('div', { class: 'pbar__track' },
      el('div', { class: 'pbar__fill', style: { width: `${p * 100}%`, background: colour || '' } }),
    ),
  );
}

/* Block-style bar (███████░░░) used on the stadium scoreboard */
export function blockBar(pct, blocks = 10) {
  const filled = Math.round(Math.max(0, Math.min(1, pct)) * blocks);
  return el('span', { class: 'blockbar' },
    el('span', { class: 'blockbar__on' }, '█'.repeat(filled)),
    el('span', { class: 'blockbar__off' }, '░'.repeat(blocks - filled)),
  );
}

export function stars(n, max = 5) {
  return el('span', { class: 'stars' }, '⭐'.repeat(n) + '☆'.repeat(Math.max(0, max - n)));
}

/* ---------------- feedback ---------------- */
let toastTimer = null;
export function toast(msg, { emoji = '⚽', kind = 'ok', ms = 1800 } = {}) {
  let host = document.getElementById('toast-host');
  if (!host) {
    host = el('div', { id: 'toast-host' });
    document.body.append(host);
  }
  clear(host);
  host.append(el('div', { class: `toast toast--${kind}` }, el('span', { class: 'toast__emoji' }, emoji), el('span', {}, msg)));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => clear(host), ms);
}

/* Full-screen GOOOOAL celebration */
export function celebrate(text = 'GOOOOOOOAL!', emoji = '⚽') {
  const host = el('div', { class: 'celebrate' },
    el('div', { class: 'celebrate__ball' }, emoji),
    el('div', { class: 'celebrate__text' }, text),
  );
  document.body.append(host);
  confetti();
  setTimeout(() => host.remove(), 1300);
}

export function confetti(count = 40) {
  const host = el('div', { class: 'confetti' });
  const colours = ['#35c46a', '#f6c945', '#3a86ff', '#e5383b', '#ffffff', '#ff8c42'];
  for (let i = 0; i < count; i++) {
    host.append(el('i', {
      style: {
        left: `${Math.random() * 100}%`,
        background: colours[i % colours.length],
        animationDelay: `${Math.random() * 0.4}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      },
    }));
  }
  document.body.append(host);
  setTimeout(() => host.remove(), 2200);
}

/* Modal used for trophies, lesson results, parent gate */
export function modal({ title, body, actions = [], dismissable = true }) {
  const back = el('div', { class: 'modal-back' });
  const box = el('div', { class: 'modal' },
    title ? el('h2', { class: 'modal__title' }, title) : null,
    el('div', { class: 'modal__body' }, body),
    el('div', { class: 'modal__actions' },
      ...actions.map(a => el('button', {
        class: `btn ${a.primary ? 'btn--primary' : ''}`,
        onClick: () => { back.remove(); a.onClick?.(); },
      }, a.label)),
    ),
  );
  back.append(box);
  if (dismissable) back.addEventListener('click', e => { if (e.target === back) back.remove(); });
  document.body.append(back);
  return { close: () => back.remove(), node: back };
}

/* Speaker button that reads English aloud for a non-reader */
export function speakerButton(text, speakFn, opts) {
  return el('button', {
    class: 'speaker', type: 'button', 'aria-label': `Say ${text}`,
    onClick: e => { e.stopPropagation(); speakFn(text, opts); },
  }, '🔊');
}

export function pageHeader(title, subtitle, backHref = '#/home') {
  return el('header', { class: 'page-head' },
    el('a', { class: 'back-btn', href: backHref }, '⬅️'),
    el('div', { class: 'page-head__text' },
      el('h1', {}, title),
      subtitle ? el('p', {}, subtitle) : null,
    ),
  );
}

export function emptyState(emoji, msg) {
  return el('div', { class: 'empty' }, el('div', { class: 'empty__emoji' }, emoji), el('p', {}, msg));
}
