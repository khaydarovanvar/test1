# -*- coding: utf-8 -*-
"""Turn the question bank's HTML into Word runs and OMML equations.

The bank writes mathematics as a handful of spans — `m` for a maths phrase,
`frac`/`num`/`den` for a stacked fraction — plus `<sup>` and the odd `<em>`.
Word has a real equation format (OMML), so a fraction prints stacked in the
exam exactly as it does in the workbook, rather than flattened onto one line.
"""

import re

CALIBRI = ('<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>'
           '<w:sz w:val="24"/><w:szCs w:val="24"/>{extra}</w:rPr>')

ENTITIES = {'&nbsp;': ' ', '&ldquo;': '“', '&rdquo;': '”',
            '&hellip;': '…', '&minus;': '−', '&times;': '×',
            '&amp;': '&', '&lt;': '<', '&gt;': '>'}


def unescape(s):
    for k, v in ENTITIES.items():
        s = s.replace(k, v)
    return s


def esc(s):
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def run(text, bold=False, italic=False):
    """One ordinary Word run, Calibri 12."""
    if not text:
        return ''
    extra = ('<w:b/>' if bold else '') + ('<w:i/>' if italic else '')
    return (f'<w:r>{CALIBRI.format(extra=extra)}'
            f'<w:t xml:space="preserve">{esc(text)}</w:t></w:r>')


# ------------------------------------------------------------------ OMML ----

def _m_run(text, upright=False):
    pr = '<m:rPr><m:nor/></m:rPr>' if upright else ''
    return f'<m:r>{pr}<m:t xml:space="preserve">{esc(text)}</m:t></m:r>'


def _text_runs(text):
    """Maths text, with the degree sign kept tight against its number.

    Word lays ° out as an operator and opens a gap in front of it, so 40°
    prints as 40 °. Marked as normal text it stays where it was written.
    """
    out = []
    for part in re.split(r'(\u00b0)', text):
        if part == '\u00b0':
            out.append(_m_run(part, upright=True))
        elif part:
            out.append(_m_run(part))
    return out


def _take_span(s, i):
    """The whole <span …>…</span> starting at i, nesting included."""
    depth, j = 0, i
    while j < len(s):
        if s.startswith('<span', j):
            depth += 1
            j = s.index('>', j) + 1
        elif s.startswith('</span>', j):
            depth -= 1
            j += 7
            if depth == 0:
                return s[i:j], j
        else:
            j += 1
    raise ValueError('unclosed span in ' + s[i:i + 60])


def _inner(frag):
    return frag[frag.index('>') + 1:-len('</span>')]


def _split_last_atom(text):
    """What a <sup> attaches to: a bracketed group, or the last character."""
    text = text.rstrip()
    if text.endswith(')'):
        depth = 0
        for k in range(len(text) - 1, -1, -1):
            if text[k] == ')':
                depth += 1
            elif text[k] == '(':
                depth -= 1
                if depth == 0:
                    return text[:k], text[k:]
    return text[:-1], text[-1:]


def _math(s):
    """A list of OMML fragments for the inside of a maths span.

    Brackets become real OMML delimiters, so a bracket round a stacked
    fraction grows to its height instead of staying a typewriter parenthesis.
    """
    out, i, stack = [], 0, []
    while i < len(s):
        if s.startswith('<span', i):
            frag, i = _take_span(s, i)
            if 'class="frac"' in frag[:frag.index('>')]:
                body = _inner(frag)
                num, j = _take_span(body, 0)
                den, _ = _take_span(body, j)
                out.append('<m:f><m:fPr><m:ctrlPr/></m:fPr>'
                           f'<m:num>{"".join(_math(_inner(num)))}</m:num>'
                           f'<m:den>{"".join(_math(_inner(den)))}</m:den></m:f>')
            else:                                   # a plain or nested m span
                out.extend(_math(_inner(frag)))
        elif s.startswith('<sup>', i):
            j = s.index('</sup>', i)
            exp = s[i + 5:j]
            i = j + 6
            base = out.pop() if out else _m_run('')
            m = re.fullmatch(r'<m:r><m:t xml:space="preserve">(.*)</m:t></m:r>',
                             base, re.S)
            if m:                                   # split the text it sits on
                head, atom = _split_last_atom(m.group(1))
                if head:
                    out.append(_m_run(head))
                base = _m_run(atom)
            out.append(f'<m:sSup><m:e>{base}</m:e>'
                       f'<m:sup>{"".join(_math(exp))}</m:sup></m:sSup>')
        elif s.startswith('<', i):                  # any other tag: drop it
            i = s.index('>', i) + 1
        else:
            j = s.find('<', i)
            j = len(s) if j < 0 else j
            for part in re.split(r'([()])', unescape(s[i:j])):
                if part == '(':
                    stack.append(out)
                    out = []
                elif part == ')' and stack:
                    inner, out = out, stack.pop()
                    # the brackets must be named: an m:d with no begChr/endChr
                    # is drawn as a pair of vertical bars by LibreOffice
                    out.append('<m:d><m:dPr><m:begChr m:val="("/>'
                               '<m:endChr m:val=")"/><m:ctrlPr/></m:dPr>'
                               f'<m:e>{"".join(inner)}</m:e></m:d>')
                elif part:
                    out.extend(_text_runs(part))
            i = j
    while stack:                                  # an unmatched '(' — keep it
        inner, out = out, stack.pop()
        out.append(_m_run('('))
        out.extend(inner)
    return out


def to_runs(html, bold=False):
    """Word runs for a question or an answer: prose as text, maths as OMML."""
    # a fraction written outside a maths span is still mathematics: mark it
    # too, or its structure is dropped and the numerator and denominator run
    # together on one line
    html = re.sub(r'<span class="(m|frac)">', lambda m: '\x00' + m.group(0), html)
    out, i = [], 0
    while i < len(html):
        if html.startswith('\x00<span', i):
            frag, i = _take_span(html, i + 1)
            frag = frag.replace('\x00', '')      # markers on nested spans
            if 'class="frac"' in frag[:frag.index('>')]:
                out.append(f'<m:oMath>{"".join(_math(frag))}</m:oMath>')
                continue
            # Word lays the degree sign out as an operator and opens a gap in
            # front of it, so 40° prints as 40 °. Set it as ordinary text,
            # outside the equation, and it sits where it was written.
            parts = _inner(frag).split('\u00b0')
            for k, part in enumerate(parts):
                if part:
                    out.append(f'<m:oMath>{"".join(_math(part))}</m:oMath>')
                if k < len(parts) - 1:
                    out.append(run('\u00b0', bold=bold))
        elif html.startswith('<em>', i):
            j = html.index('</em>', i)
            out.append(run(unescape(re.sub(r'<[^>]+>', '', html[i + 4:j])),
                           bold=bold, italic=True))
            i = j + 5
        elif html.startswith('<', i):
            i = html.index('>', i) + 1
        else:
            j = min([p for p in (html.find('<', i), html.find('\x00', i))
                     if p >= 0] or [len(html)])
            out.append(run(unescape(html[i:j]), bold=bold))
            i = j
    # Two equations side by side with nothing between them render with a
    # placeholder glyph in the gap, so adjacent ones are joined into one.
    return ''.join(out).replace('</m:oMath><m:oMath>', '')
