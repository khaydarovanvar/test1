# -*- coding: utf-8 -*-
"""Shared helpers for the workbook question bank.

Every topic module imports these, so a fraction is drawn the same way on
every page of every book.
"""


def F(num, den):
    """A stacked fraction."""
    return (f'<span class="frac"><span class="num">{num}</span>'
            f'<span class="den">{den}</span></span>')


def M(text):
    return f'<span class="m">{text}</span>'


def sq(base, power=2):
    return f'{base}<sup>{power}</sup>'


SECTION_BLURB = {
    'Focus': 'The basic skill, one step at a time.',
    'Practice': 'The same skill where a denominator has to be factorised first.',
    'Challenge': 'Several factors, higher powers and reversed brackets.',
    'Beyond': 'Olympiad work. Expect to spend real time on these — '
              'some need an idea, not just a method.',
}
