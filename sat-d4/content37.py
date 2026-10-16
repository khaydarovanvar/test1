# -*- coding: utf-8 -*-
"""SAT Math 3.7 — Inference & Margin of Error."""
import algebra as A
import data as D


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.7',
    'title': 'Inference & Margin of Error',
    'sections': [
        {
            'title': 'Population, sample and parameter',
            'fact': 'the population is everyone you want to describe  |  the sample is who '
                    'you actually asked',
            'text': 'A **statistic** comes from the sample; a **parameter** describes the '
                    'population. The whole point of sampling is to estimate the parameter '
                    'you cannot measure. The sample must be drawn from the population you '
                    'want to describe — surveying one school tells you nothing about a '
                    'country.',
            'figs': [D.population_sample('select')],
            'caption': 'One arrow, and everything downstream depends on it. What the sample '
                       'licenses you to say is fixed by how it was drawn.',
            'examples': [
                ex('A school of 1,200 students is surveyed by asking 150 of them. Name the '
                   'population and the sample.',
                   ['**Population** = the 1,200 students; **sample** = the 150 asked.'],
                   D.population_sample('select')),
                ex('In that survey 60% of those asked walk to school. Is 60% a statistic or a '
                   'parameter?',
                   ['It comes from the sample, so it is a **statistic**.',
                    'It estimates the unknown **parameter**, the true percentage among all '
                    '1,200.'],
                   A.rules_panel((('statistic', 'measured on the sample — 60%'),
                                  ('parameter', 'describes all 1,200 — unknown')),
                                 title='which of the two did you actually measure?',
                                 w=330)),
                ex('A researcher wants to describe all adults in a city but surveys only gym '
                   'members. What is wrong?',
                   ['The sample is **not drawn from the whole population**, so it is '
                    'biased.',
                    'Gym members differ systematically from adults in general, and no '
                    'sample size fixes that.'],
                   D.bias_panel()),
            ],
        },
        {
            'title': 'Random selection and bias',
            'fact': 'only a random sample supports generalising to the population',
            'text': 'Bias is about **how** people were chosen, not **how many**. A voluntary '
                    'online poll, a convenience sample at one location, or a survey of '
                    'people who chose to reply are all biased no matter how large. '
                    'Increasing a biased sample makes the wrong answer more precise, not '
                    'more correct.',
            'figs': [D.bias_panel(part='people who chose to reply',
                                  whole='all adults in the country',
                                  verdict='people with strong opinions are the ones who '
                                          'answer, so the sample tilts before it is '
                                          'counted')],
            'caption': 'The red blob is who actually answered. It sits inside the '
                       'population but is not representative of it, and 5,000 replies do '
                       'not change its position.',
            'examples': [
                ex('A survey is posted online and 5,000 people reply voluntarily. Is it '
                   'reliable for the population?',
                   ['**No.** Voluntary response is biased — people with strong opinions '
                    'answer.', '5,000 replies do not repair that.'],
                   D.bias_panel(part='people who chose to reply',
                                whole='all adults in the country')),
                ex("Which is better for estimating a school's average: 60 randomly chosen "
                   'students, or 300 volunteers?',
                   ['**The 60 random students.** Random selection removes systematic bias; '
                    'volunteering does not.'],
                   A.rules_panel((('60 chosen at random', 'no systematic tilt — usable'),
                                  ('300 volunteers', 'tilted, however many there are')),
                                 title='size cannot buy what randomness gives', w=340)),
                ex('A council surveys shoppers at one shopping centre on a Tuesday morning. '
                   'Name the problem.',
                   ['A **convenience sample**. Tuesday-morning shoppers are not '
                    'representative of all residents, so the results cannot be '
                    'generalised.'],
                   D.bias_panel(part='Tuesday-morning shoppers', whole='all residents',
                                verdict='whoever happened to be there is not whoever '
                                        'lives in the town')),
            ],
        },
        {
            'title': 'Margin of error',
            'fact': 'plausible interval = estimate ± margin of error',
            'text': 'The margin of error turns a single estimate into a **range of '
                    'believable values** for the population. The SAT never asks you to '
                    'compute one from scratch; it asks you to **build** the interval, '
                    '**read** it, or say **what changes** it.',
            'figs': [D.interval(62, 4)],
            'caption': 'The estimate sits in the middle and the margin runs both ways. '
                       'Every value inside the bar is a believable population value.',
            'examples': [
                ex('A poll estimates 62% with a margin of error of 4 percentage points. Give '
                   'the plausible interval.',
                   ['62 − 4 = 58 and 62 + 4 = 66.', 'The interval is **58% to 66%**.'],
                   D.interval(62, 4)),
                ex('Is a true value of 57% consistent with that poll?',
                   ['**No.** 57% lies outside 58%–66%, so it is not among the plausible '
                    'values.'],
                   D.interval(62, 4, claim=57)),
                ex('A second poll reports 62% with a margin of error of 1.5 points. What is '
                   'its interval?',
                   ['**60.5% to 63.5%** — a narrower, more precise estimate of the same '
                    'quantity.'],
                   D.interval(62, 1.5, second=(62, 4, 'the first poll, ±4'))),
            ],
        },
        {
            'title': 'What makes the margin of error smaller',
            'fact': 'a larger sample narrows it  |  a higher confidence level widens it',
            'text': '**Sample size** is the lever the SAT tests. More data gives a tighter '
                    'interval, but with diminishing returns — the margin shrinks with the '
                    '**square root** of the sample size, so quadrupling the sample roughly '
                    'halves it. Population size is almost irrelevant.',
            'figs': [D.moe_vs_n()],
            'caption': 'Four times as many people, about half the margin. Sixteen times as '
                       'many would be needed to quarter it.',
            'examples': [
                ex('A survey of 400 gives a margin of error of 5 points. What would 1,600 '
                   'give, roughly?',
                   ['Four times the sample roughly halves the margin.',
                    '**About 2.5 points.**'],
                   D.moe_vs_n(((400, 5.0), (1600, 2.5)))),
                ex('Two polls of the same population report margins of 2 and 6 points. Which '
                   'used a larger sample?',
                   ['**The one with the 2-point margin** — smaller margin, larger '
                    'sample.'],
                   D.moe_vs_n((('the larger sample', 2.0), ('the smaller sample', 6.0)),
                              note='read it backwards: the tighter bar came from more '
                                   'people')),
                ex('Does raising the confidence level from 95% to 99% make the interval wider '
                   'or narrower?',
                   ['**Wider.** To be more confident of capturing the true value, you must '
                    'allow a bigger range.'],
                   D.interval(62, 4, xmin=50, xmax=78,
                              second=(62, 6, 'at 99% confidence, wider'),
                              label='same data, two confidence levels')),
            ],
        },
        {
            'title': 'Reading a confidence statement',
            'fact': 'the interval is about the population value, not about individuals',
            'text': 'The **language** matters more than the arithmetic. A 95% confidence '
                    'interval of 58% to 66% says the plausible values **for the whole '
                    'population** lie in that range. It does **not** say 95% of people, and '
                    'it does not say any individual has a 95% chance of anything.',
            'figs': [D.interval(62, 4,
                                label='a 95% interval for the population percentage')],
            'caption': 'The 95% is a property of the method, not a number on this axis. '
                       'What the axis shows is the share who walk to school.',
            'examples': [
                ex('A poll gives a 95% confidence interval of 58% to 66% for the share who '
                   'walk to school. State what it means.',
                   ['It is plausible that **the true percentage for the whole population** '
                    'lies between 58% and 66%.'],
                   D.interval(62, 4,
                              label='plausible values for the population, not for a '
                                    'person')),
                ex('Does it mean 95% of students walk to school?',
                   ['**No.** 95% is the confidence level, not a percentage of students.',
                    'The estimate of walkers is **62%**.'],
                   A.rules_panel((('95%', 'the confidence level — a property of the '
                                          'method'),
                                  ('62%', 'the estimated share who walk'),
                                  ('58% to 66%', 'the plausible values for that share')),
                                 title='three numbers, three different jobs', w=340)),
                ex("Two groups' intervals are 58–66% and 64–72%. Can you say one group is "
                   'higher?',
                   ['**Not confidently** — the intervals overlap between 64% and 66%, so '
                    'the same true value is plausible for both.'],
                   D.interval(62, 4, xmin=50, xmax=80,
                              second=(68, 4, 'the second group, 64–72%'))),
            ],
        },
        {
            'title': 'Which conclusions a study supports',
            'fact': 'random selection → generalise  |  random assignment → cause',
            'text': 'Two different randomisations license **two different conclusions**, and '
                    'the SAT keeps them apart. Selecting participants at random lets you '
                    'extend findings to the population. Assigning them to groups at random '
                    'lets you claim the treatment caused the difference. **You need both for '
                    'both.**',
            'figs': [D.population_sample('both')],
            'caption': 'Two separate random steps. Each buys exactly one conclusion, and '
                       'neither lends its conclusion to the other.',
            'examples': [
                ex('200 students are chosen at random from a school and surveyed. What can '
                   'you conclude?',
                   ['You may **generalise to that school**, but not to other schools and '
                    'not about cause.'],
                   D.population_sample('select')),
                ex('Volunteers are randomly assigned to two study methods and one scores '
                   'higher. What follows?',
                   ['You may claim the method **caused** the difference for people like '
                    'these volunteers, but you **cannot generalise** beyond them.'],
                   A.rules_panel((('how they joined', 'they volunteered — not random'),
                                  ('how they were grouped', 'at random'),
                                  ('so you may say', 'cause, for these volunteers only')),
                                 title='random assignment without random selection',
                                 w=340)),
                ex('A study randomly selects participants from a city and randomly assigns '
                   'them to treatments. What is supported?',
                   ['**Both** a causal claim **and** generalisation to that city — the '
                    'strongest design the SAT will show you.'],
                   D.population_sample('both')),
            ],
        },
    ],
    'desmos_sub': 'calculator work only; the reasoning is in the wording',
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it does almost '
                    'nothing: **add and subtract the margin of error**, and scale a rate to '
                    'a population. Every mark in this topic is in the wording, not the '
                    'arithmetic.',
    'desmos': [
        ('A poll estimates 62% with a margin of error of 4 percentage points. What is the '
         'lower end of the plausible interval?', '62-4', 'Subtract for the lower end.', '58'),
        ('For the same poll, what is the upper end?', '62+4', 'Add for the upper end.', '66'),
        ('A sample of 150 out of 1,200 students is surveyed. What fraction of the population '
         'is sampled?', '150/1200', 'A sampled fraction, not a probability.', '0.125'),
        ('In a sample of 150, 90 students walk to school. What percentage is that?',
         '90/150*100', 'Convert to a percentage at the end.', '60'),
        ('A survey of 400 has a margin of error of 5 points. Four times the sample roughly '
         'halves it. What is the new margin?', '5/2',
         'Quadrupling the sample halves the margin.', '2.5'),
        ('An interval runs from 60.5% to 63.5%. What is the margin of error?',
         '(63.5-60.5)/2', 'Half the width of the interval.', '1.5'),
        ('An interval runs from 58% to 66%. What is the point estimate at its centre?',
         '(58+66)/2', 'The estimate sits in the middle.', '62'),
        ('In a town of 24,000 adults, a poll estimates 38% support. How many adults is that?',
         '0.38*24000', 'Scale the proportion up to the population.', '9120'),
        ('A sample proportion is 0.44 in a survey of 180 people. How many people is that?',
         '0.44*180', 'Desmos keeps the decimal; round to a whole person if the question '
         'asks.', '79.2'),
        ('Two polls report margins of 2.0 and 6.0 points. How many times wider is the second '
         'interval?', '6/2', 'Compare the margins directly.', '3'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Two questions answer nearly all of these: **who was sampled**, and **is '
                   'the claimed value inside the interval**. Neither needs a calculation.',
    'part2': [
        ('P1', 'Hard',
         'A researcher surveys 150 students selected at random from the 1,200 students at a '
         'school and finds that 60% walk to school. Which is the parameter of interest?',
         'The percentage of all 1,200 students who walk to school.',
         ['A **parameter** describes the population. The 60% is a statistic that estimates '
          'it.',
          'The groups in B and D are the sample and the population themselves, not '
          'percentages.'],
         D.population_sample('select')),
        ('P2', 'Hard',
         'A poll of registered voters estimates that 62% support a proposal, with a margin of '
         'error of 4 percentage points. Which interval gives the plausible values for the '
         'whole population?', '58% to 66%',
         ['Estimate ± margin of error: 62 − 4 to 62 + 4.',
          '**58% to 66%.** Two common wrong answers use the margin on one side only.'],
         D.interval(62, 4)),
        ('P3', 'Hard',
         'A website posts a survey and 5,000 readers choose to respond. Which is the '
         'strongest objection to generalising the results to all adults in the country?',
         'Respondents chose themselves, so the sample is biased.',
         ['This is **voluntary response bias**: people with strong views reply.',
          '5,000 is a large sample, so A is wrong — and a large biased sample is still '
          'biased.'],
         D.bias_panel(part='readers who replied', whole='all adults in the country')),
        ('P4', 'Hard',
         'A survey of 400 people produces a margin of error of 5 percentage points. '
         'Approximately what margin of error would a survey of 1,600 similar people produce?',
         '2.5',
         ['The margin shrinks with the square root of the sample size, so four times the '
          'sample roughly halves it.',
          '**About 2.5 points.** A common wrong answer divides by 4 instead of by 2.'],
         D.moe_vs_n(((400, 5.0), (1600, 2.5)))),
        ('P5', 'Hard',
         'A 95% confidence interval for the percentage of residents who recycle runs from 58% '
         'to 66%. What is the margin of error, in percentage points?', '4',
         ['The interval is the estimate ± the margin, so the margin is half its width.',
          '(66 − 58)/2 = **4 percentage points**.'],
         D.interval(62, 4, label='read it backwards: half the width is the margin')),
        ('P6', 'Hard',
         'In a town of 24,000 adults, a random sample estimates that 38% support a new '
         'library. Approximately how many adults in the town does this estimate represent?',
         '9120',
         ['0.38 × 24,000 = **9,120 adults**.'],
         A.flow(('38% support', '× 24 000 adults', '9 120 adults'))),
        ('P7', 'Very hard',
         'A study reports a 95% confidence interval of 58% to 66% for the share of students '
         'who walk to school. State the best-supported conclusion.',
         'It is plausible that the true percentage for all students is between 58% and 66%.',
         ['The interval describes plausible values for the **population percentage**.',
          'A common wrong answer confuses the confidence level with the quantity measured; '
          'B treats an estimate as exact.'],
         D.interval(62, 4,
                    label='about the population share, not about any one student')),
        ('P8', 'Very hard',
         "Two schools are surveyed. School A's interval for the proportion who walk is 58% to "
         "66%; School B's is 64% to 72%. What can be concluded?",
         'The intervals overlap, so the data does not establish which school is higher.',
         ['The intervals share the range 64%–66%, so a single true value could sit in '
          'both.',
          'No confident difference can be claimed. **Overlap is the thing to look for.**'],
         D.interval(62, 4, xmin=50, xmax=80, second=(68, 4, 'School B, 64–72%'),
                    label='School A below, School B above — they overlap')),
        ('P9', 'Very hard',
         'Researchers randomly select 200 adults from a city and randomly assign them to one '
         "of two exercise programmes. Programme A's group shows greater improvement. State "
         'the best-supported conclusion.',
         'Programme A causes greater improvement for adults in that city.',
         ['Random **assignment** supports the causal claim; random **selection** from the '
          'city supports generalising to that city — but no further.',
          'A common wrong answer over-reaches to a population never sampled.'],
         D.population_sample('both')),
        ('P10', 'Very hard',
         'A council wants to estimate the average commute time of all its residents. It '
         'surveys shoppers at one shopping centre on a Tuesday morning. Which change would '
         'most improve the study?', "Select residents at random from the council's records.",
         ['The flaw is **how** people were chosen, not **how many**.',
          'Only random selection from the whole population removes it; A makes a biased '
          'estimate more precise, not more accurate.'],
         D.bias_panel(part='Tuesday-morning shoppers', whole='all residents',
                      verdict='fix the arrow, not the sample size — draw at random from '
                              'the whole population')),
        ('P11', 'Very hard',
         'A poll of 1,000 people reports 45% support with a margin of error of 3 points. The '
         'pollster then reports 45% with a margin of error of 3 points for a subgroup of only '
         '100 of those people. What is wrong?',
         'The subgroup is ten times smaller, so its margin of error must be larger — '
         'roughly 9.5 points.',
         ['Margin of error depends on **sample size**. A tenth of the sample widens the '
          'margin by a factor of about √10 ≈ 3.2, so roughly 3 × 3.2 ≈ **9.5 points**.',
          'Reusing the full-sample margin for a subgroup overstates the precision badly.'],
         D.moe_vs_n(((100, 9.5), (1000, 3.0)),
                    note='÷10 on n means ×√10 ≈ 3.2 on the margin')),
        ('P12', 'Very hard',
         "A survey of a random sample of 150 of a school's 1,200 students finds 90 walk to "
         'school, with a margin of error of 7 percentage points. What is the lower end of the '
         'plausible interval for the whole school, as a percentage?', '53',
         ['The sample estimate is 90/150 = 60%.',
          '60 − 7 = **53%**. The population size of 1,200 plays no part in the '
          'calculation.'],
         D.interval(60, 7, xmin=45, xmax=75,
                    label='estimate 60%, margin 7 points')),
    ],
    'habit': 'A margin of error covers **sampling variation and nothing else**. It does not '
             'cover a biased sample, a leading question or people answering dishonestly '
             '— and no sample size will fix those.',
}
