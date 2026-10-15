/* Grade 11 · Algebra and Calculus · Quarters I and II in one volume.

   The content is not repeated here: the two quarter modules are the single
   source, so a correction to either flows into this book on the next build.
   Topics are renumbered 1–17 so the contents page, the anchors and the
   answers all run continuously.                                          */

import { topics as q1 } from './g11-alg-q1.mjs';
import { topics as q2 } from './g11-alg-q2.mjs';

export const meta = {
  eyebrow: 'GRADE 11 · ALGEBRA AND CALCULUS · QUARTERS I AND II',
  title: 'The derivative and the indefinite integral',
  lead: 'A workbook to be written in, covering lessons 1 to 48. Each topic runs Focus (easy), Practice (medium), Challenge (hard) and Beyond (very hard, olympiad). Answers, with solutions for the Beyond questions, are at the back.',
  footer: 'Grade 11 Algebra · The derivative and the indefinite integral · Quarters I and II'
};

export const topics = [...q1, ...q2].map((t, i) => ({ ...t, n: i + 1 }));
