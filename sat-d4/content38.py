# -*- coding: utf-8 -*-
"""SAT Math 3.8 — Evaluating Statistical Claims."""
import algebra as A
import data as D

YES, NO = '✓ yes', '✗ no'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.8',
    'title': 'Evaluating Statistical Claims',
    'sections': [
        {
            'title': 'Observational study or experiment?',
            'fact': 'a study that only watches cannot show cause  |  an experiment imposes a '
                    'treatment',
            'text': 'Ask one question: **did the researchers decide who got what?** If they '
                    'merely recorded what people already did, it is **observational** and '
                    'the strongest claim available is association. If they assigned the '
                    'treatment, it is an **experiment** and cause is on the table.',
            'figs': [D.population_sample('both')],
            'caption': 'The second random step is the one that creates an experiment. '
                       'Without it there is no treatment, and so no cause to claim.',
            'examples': [
                ex('Researchers record the diets of 500 adults and their blood pressure. '
                   'Which type of study is this?',
                   ['**Observational.** Nobody was told what to eat, so no causal claim is '
                    'supported.'],
                   A.check_table((('was a treatment imposed?', 'no — people ate as they '
                                                              'already did', False),
                                  ('so the claim available is', 'association only', True)),
                                 title='observational: the researchers only watched',
                                 w=340, yes=YES, no=NO)),
                ex('Researchers randomly give 250 adults diet A and 250 diet B, then measure '
                   'blood pressure. Which type?',
                   ['**An experiment** — the treatment was imposed, and at random.'],
                   D.population_sample('both')),
                ex('Why can the first study not show that diet causes high blood pressure?',
                   ['People who choose a diet differ in other ways too — age, income, '
                    'exercise.',
                    'Any of these **confounding variables** could explain the '
                    'difference.'],
                   D.lurking(cause='income, age and exercise', a='the diet chosen',
                             b='blood pressure')),
            ],
        },
        {
            'title': 'Random selection versus random assignment',
            'fact': 'random selection → generalise to the population  |  random assignment '
                    '→ claim cause',
            'text': 'These two are **constantly swapped** on the SAT. **Selection** is how '
                    'people entered the study; **assignment** is how they were split once '
                    'inside. Each buys exactly one conclusion, and you need both to get '
                    'both.',
            'figs': [D.population_sample('both')],
            'caption': 'Two arrows, two licences. Cover either one and the conclusion it '
                       'bought disappears with it.',
            'examples': [
                ex('Volunteers are randomly assigned to two tutoring methods. What can and '
                   'cannot be concluded?',
                   ['**Can:** the method caused the difference, for people like these '
                    'volunteers.',
                    '**Cannot:** generalise to all students — the volunteers were not '
                    'randomly selected.'],
                   A.check_table((('random selection?', 'no — they volunteered', False),
                                  ('random assignment?', 'yes — the groups were drawn by '
                                                         'chance', True)),
                                 title='cause, but only for people like these volunteers',
                                 w=345, yes=YES, no=NO)),
                ex("A random sample of a city's residents is surveyed about commuting. What "
                   'is supported?',
                   ["**Generalisation to that city's residents.** No treatment was "
                    'imposed, so no causal claim.'],
                   A.check_table((('random selection?', 'yes — drawn from the city', True),
                                  ('random assignment?', 'no — nothing was imposed',
                                   False)),
                                 title='generalisation, but no cause', w=345,
                                 yes=YES, no=NO)),
                ex('Which design supports both conclusions?',
                   ['**Random selection from the population and random assignment to '
                    'groups** — a randomised experiment on a random sample.'],
                   D.population_sample('both')),
            ],
        },
        {
            'title': 'Confounding variables',
            'fact': 'a third variable linked to both the cause and the effect',
            'text': 'When a question asks why an observational result may mislead, the '
                    'answer is usually a **named third variable**. A good answer identifies '
                    'something plausibly connected to **both** quantities — not just any '
                    'difference between the groups.',
            'figs': [D.lurking(cause='household income', a='parks in the town',
                               b='obesity rate')],
            'caption': 'A confounder needs an arrow to each of the two quantities. One '
                       'arrow is not enough, which is how the wrong options are built.',
            'examples': [
                ex('Towns with more parks have lower obesity rates. Suggest a confounding '
                   'variable.',
                   ['**Household income.** Wealthier areas tend to have both more parks '
                    'and lower obesity, so the parks may not be the cause.'],
                   D.lurking(cause='household income', a='parks in the town',
                             b='obesity rate')),
                ex('Children with larger shoe sizes read better. What explains it?',
                   ['**Age.** Older children have bigger feet and read better; shoe size '
                    'causes nothing.'],
                   D.lurking(cause='age', a='shoe size', b='reading score')),
                ex('Why does random assignment remove confounding?',
                   ['It spreads the other variables **evenly across the groups on '
                    'average**, so the groups differ only in the treatment.'],
                   D.population_sample('both')),
            ],
        },
        {
            'title': 'How the sample limits the conclusion',
            'fact': 'you may generalise only to the population the sample was drawn from',
            'text': 'Match the conclusion to the **sampling frame**. A random sample of one '
                    'school supports claims about **that school** and nothing wider. The '
                    'commonest wrong answer on these questions is a true-sounding statement '
                    'about a population that was never sampled.',
            'figs': [D.bias_panel(part='one city', whole='the whole country',
                                  verdict='the conclusion may reach the circle the sample '
                                          'came from, and no further')],
            'caption': 'The sample defines its own ceiling. Everything outside the red blob '
                       'is a population nobody asked.',
            'examples': [
                ex('200 students are chosen at random from one school. To whom do the results '
                   'apply?',
                   ["**To that school's students only** — not to the district, and not to "
                    'students generally.'],
                   D.population_sample('select')),
                ex('A study samples randomly from all adults in one city. A newspaper reports '
                   'the result as a national finding. What is wrong?',
                   ['The sampling frame was **one city**, so the conclusion cannot be '
                    'stretched to the country.'],
                   D.bias_panel(part='one city', whole='the whole country',
                                verdict='the headline claims a population the study never '
                                        'sampled')),
                ex('A sample is drawn at random from members of a sports club. Can the result '
                   'describe the town?',
                   ["**No.** The population is the club's members; club members differ "
                    'systematically from the town as a whole.'],
                   D.bias_panel(part='club members', whole='everyone in the town')),
            ],
        },
        {
            'title': 'Judging a reported claim',
            'fact': 'check three things: how chosen, how assigned, how far stretched',
            'text': 'Most of these questions give you a headline and four conclusions, and '
                    '**the right one is the cautious one**. Scan for the overreach: a causal '
                    'verb on an observational study, or a population wider than the one '
                    'sampled.',
            'figs': [A.check_table(
                (('how were they chosen?', 'not at random', False),
                 ('how were they assigned?', 'not assigned at all', False),
                 ('how far is it stretched?', 'to every school', False)),
                title='‘eat breakfast, score higher — so schools should serve it’',
                w=345, yes=YES, no=NO)],
            'caption': 'Three boxes, and this headline fails all three. The correct answer '
                       'to such a question is always the one that claims least.',
            'examples': [
                ex('Headline: ‘Students who eat breakfast score higher — so schools should '
                   'serve breakfast.’ Evaluate it.',
                   ['The data is **observational**, so it shows association only.',
                    'Families who provide breakfast may differ in other ways. **The '
                    'recommendation outruns the evidence.**'],
                   D.lurking(cause='family circumstances', a='breakfast at home',
                             b='test score')),
                ex('A randomised trial on 300 volunteers finds a drug works. A report says it '
                   'works for everyone. What is the flaw?',
                   ['Random **assignment** supports cause within the trial, but the '
                    'volunteers were **not randomly selected**, so the result cannot be '
                    'generalised to everyone.'],
                   A.check_table((('random assignment?', 'yes — so cause is supported',
                                   True),
                                  ('random selection?', 'no — they volunteered', False),
                                  ('claim made', '‘it works for everyone’', False)),
                                 title='the cause is earned; the reach is not', w=345,
                                 yes=YES, no=NO)),
                ex('What one change would let the breakfast study support its '
                   'recommendation?',
                   ['**Randomly assign** students to receive breakfast or not, then '
                    'compare — turning the observational study into an experiment.'],
                   D.population_sample('both')),
            ],
        },
        {
            'title': 'Precision, bias and sample size',
            'fact': 'a bigger sample narrows the margin of error  |  only better selection '
                    'removes bias',
            'text': 'Sample size and bias solve **different problems** and the SAT tests '
                    'whether you know which. A larger sample makes the estimate more '
                    '**precise**; it does nothing about a sample drawn from the **wrong '
                    'people**.',
            'figs': [D.interval(62, 4)],
            'caption': 'Sample size moves the ends of this bar inwards. Nothing about sample '
                       'size moves the bar to where it should have been.',
            'examples': [
                ex('A biased survey of 500 is repeated with 5,000 people the same way. What '
                   'improves?',
                   ['**Precision only.** The margin of error narrows, but the estimate is '
                    'still centred on the wrong value.'],
                   D.moe_vs_n((('500 people', 5.0), ('5 000 people', 1.6)),
                              note='narrower, and still centred in the wrong place')),
                ex('A survey of 400 gives a margin of 5 points. What does 1,600 give, '
                   'roughly?',
                   ['**About 2.5 points** — four times the sample roughly halves the '
                    'margin.'],
                   D.moe_vs_n(((400, 5.0), (1600, 2.5)))),
                ex('Which fixes bias: a larger sample, or random selection?',
                   ['**Random selection.** Size addresses precision; selection addresses '
                    'bias, and no amount of size repairs bad selection.'],
                   A.rules_panel((('a larger sample', 'narrows the margin of error'),
                                  ('random selection', 'removes the bias')),
                                 title='two problems, two different cures', w=330)),
            ],
        },
    ],
    'desmos_sub': 'calculator work only; the judgement is in the wording',
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'calculator for the percentages inside the question**. The decision '
                    '— what the study is allowed to claim — is entirely yours.',
    'desmos': [
        ('A survey of 400 people has a margin of error of 5 percentage points. Four times the '
         'sample roughly halves it. What is the new margin?', '5/2',
         'Quadrupling the sample halves the margin.', '2.5'),
        ("A random sample of 250 of a city's 40,000 adults is surveyed. What fraction of the "
         'population is sampled?', '250/40000', 'A sampled fraction.', '0.00625'),
        ('In an experiment, 250 adults receive diet A and 250 receive diet B. How many take '
         'part in all?', '250+250', 'Group sizes add.', '500'),
        ('A trial reports 38% improvement among 300 volunteers. How many people improved?',
         '0.38*300', 'Proportion times group size.', '114'),
        ('An estimate of 62% has a margin of error of 4 points. What is the width of the '
         'plausible interval, in percentage points?', '2*4',
         'The interval spans the margin on each side.', '8'),
        ('Of 500 adults studied, 180 reported a high-salt diet. What percentage is that?',
         '180/500*100', 'Convert at the end.', '36'),
        ('A study of 1,200 students samples 150. By what factor would the sample need to grow '
         'to halve the margin of error?', '4',
         'Margin shrinks with the square root of the sample size.', '4'),
        ('Two groups of 250 report mean improvements of 6.4 and 4.1 units. What is the '
         'difference?', '6.4-4.1', 'A difference of means.', '2.3'),
        ('A town of 24,000 adults is estimated at 38% support, with a margin of 3 points. How '
         'many adults does the lower end represent?', '0.35*24000',
         'Apply the lower percentage to the population.', '8400'),
        ('A sample proportion is 90 out of 150. What percentage is that?', '90/150*100',
         'The sample statistic, before any margin is applied.', '60'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Run the two-question test on every one: **was selection random?** (how '
                   'far it generalises) and **was assignment random?** (whether cause may be '
                   'claimed). They are independent.',
    'part2': [
        ('P1', 'Hard',
         'Researchers recorded the diets and blood pressure of 500 adults who had each chosen '
         'their own diet, and found that a high-salt diet was associated with higher blood '
         'pressure. State the best-supported conclusion.',
         'There is an association between the two, but the study cannot establish cause.',
         ['Nobody was assigned a diet, so this is an **observational study** and only '
          'association follows.',
          'Two common wrong answers assert a direction of cause the design cannot '
          'support.'],
         A.check_table((('random selection?', 'not stated', False),
                        ('random assignment?', 'no — each adult chose', False),
                        ('so you may claim', 'association only', True)),
                       title='an observational study of 500 adults', w=345,
                       yes=YES, no=NO)),
        ('P2', 'Hard',
         'In a study, 300 volunteers are randomly assigned to either a new tutoring method or '
         "the usual one, and the new method's group scores higher. State the best-supported "
         'conclusion.',
         'The new method causes higher scores for people like these volunteers.',
         ['Random assignment supports a **causal claim**, but the volunteers were not '
          'randomly selected, so the finding cannot be stretched beyond people like them.',
          'A common wrong answer is the classic overreach.'],
         A.check_table((('random selection?', 'no — they volunteered', False),
                        ('random assignment?', 'yes', True),
                        ('so you may claim', 'cause, for these volunteers', True)),
                       title='an experiment on a self-selected group', w=345,
                       yes=YES, no=NO)),
        ('P3', 'Hard',
         'A study finds that towns with more public parks have lower obesity rates. Which is '
         'the most plausible confounding variable?', 'The average household income of the '
         'town.',
         ['A confounder must plausibly affect **both** quantities. Wealthier towns tend to '
          'have more parks and lower obesity.',
          'Two common wrong answers name the two variables already in the study.'],
         D.lurking(cause='household income', a='parks in the town', b='obesity rate')),
        ('P4', 'Hard',
         'A researcher randomly selects 200 students from one school and surveys them about '
         'study habits. To which group may the results be generalised?',
         'All students at that school.',
         ['The sample was drawn at random from that school, so the conclusion extends to '
          '**that school and no further**.',
          'A common wrong answer is too cautious: random sampling is exactly what licenses '
          'the step from sample to school.'],
         D.population_sample('select')),
        ('P5', 'Hard',
         'A survey of 400 people reports a margin of error of 5 percentage points. The '
         'researchers repeat it with 1,600 people, sampled the same biased way. Which '
         'improves?',
         'Precision only; the estimate is still centred on the wrong value.',
         ['A larger sample narrows the margin of error, so the estimate becomes more '
          '**precise**.',
          'But the same flawed selection means it is still **precisely wrong**. Size does '
          'not fix bias.'],
         D.moe_vs_n(((400, 5.0), (1600, 2.5)),
                    note='narrower both times — and wrong both times')),
        ('P6', 'Very hard',
         'Two studies are described. Study 1 randomly selects 500 adults from a city and '
         'surveys their exercise habits. Study 2 takes 500 volunteers and randomly assigns '
         'them to two exercise programmes. State the best-supported conclusion.',
         'Study 1 supports generalisation to the city; Study 2 supports a causal claim for '
         'its participants.',
         ['Random **selection** (Study 1) buys generalisation; random **assignment** '
          '(Study 2) buys cause.',
          'A common wrong answer swaps them, which is the error the question is built '
          'around.'],
         D.population_sample('both')),
        ('P7', 'Very hard',
         'A newspaper reports: ‘Students who eat breakfast score higher on tests, so schools '
         "should provide breakfast.’ The data came from a survey of students' existing "
         'habits. What is the main flaw?',
         'The recommendation assumes cause from an observational study.',
         ['The survey recorded what students **already did**, so it shows association '
          'only. Families who provide breakfast may differ in other ways.',
          'The recommendation needs an experiment behind it.'],
         A.check_table((('how were they chosen?', 'not at random', False),
                        ('how were they assigned?', 'not assigned at all', False),
                        ('how far is it stretched?', 'to every school', False)),
                       title='the headline fails all three checks', w=345,
                       yes=YES, no=NO)),
        ('P8', 'Very hard',
         'A clinical trial randomly assigns 300 patients, all recruited from one hospital, to '
         'a drug or a placebo. The drug group improves significantly more. State the '
         'best-supported conclusion.',
         'The drug caused the improvement in this group of patients.',
         ['Random assignment establishes **cause within the trial**.',
          'Recruitment from a single hospital is not random selection from any wider '
          'population, so A over-reaches; C under-reads the assignment.'],
         A.check_table((('random selection?', 'no — one hospital only', False),
                        ('random assignment?', 'yes', True),
                        ('so you may claim', 'cause, for these patients', True)),
                       title='a real experiment on a narrow group', w=345,
                       yes=YES, no=NO)),
        ('P9', 'Very hard',
         'A researcher wants to estimate the average commute time of all adults in a city and '
         'surveys every adult leaving one train station at 8 a.m. Which single change would '
         'most improve the study?',
         "Select adults at random from the city's electoral register.",
         ['The flaw is the **sampling frame**: train users are not all adults, and no '
          'sample size fixes that.',
          'Only random selection from the whole population does. A common wrong answer '
          'makes a biased estimate more precise, not more accurate.'],
         D.bias_panel(part='8 a.m. train users', whole='all adults in the city',
                      verdict='people who take the train commute differently from '
                              'everyone else')),
        ('P10', 'Very hard',
         'In an experiment, 250 adults on diet A improved by a mean of 6.4 units and 250 on '
         'diet B by a mean of 4.1 units. Assignment was random. What is the difference in '
         'mean improvement?', '2.3',
         ['6.4 − 4.1 = **2.3 units**.',
          'Because assignment was random, this difference can reasonably be attributed to '
          'the diets.'],
         A.flow(('diet A: 6.4', 'diet B: 4.1', '6.4 − 4.1 = 2.3'),
                note='random assignment is what lets you blame the diets')),
        ('P11', 'Very hard',
         'A town has 24,000 adults. A random sample estimates 38% support for a proposal, '
         'with a margin of error of 3 percentage points. Approximately how many adults does '
         'the lower end of the plausible interval represent?', '8400',
         ['Lower end = 38 − 3 = 35%.', '0.35 × 24,000 = **8,400 adults**.'],
         A.flow(('38% − 3 = 35%', '× 24 000 adults', '8 400 adults'),
                note='take the lower end first, then scale it up')),
        ('P12', 'Very hard',
         'Of 500 adults in an observational study, 180 reported a high-salt diet. What '
         'percentage of the sample is this?', '36',
         ['180/500 = 0.36 = **36%**.',
          'Note this is a statistic about **the sample**; extending it to the population '
          'needs the sample to have been randomly selected.'],
         A.flow(('180 of 500', '180 ÷ 500 = 0.36', '36% of the sample'),
                note='a statistic about the sample, not yet about the population')),
    ],
    'habit': 'Selection and assignment are **two different things** and answer two different '
             'questions. Most wrong answers on this topic are true statements about the wrong '
             'group, or causal claims from data where nobody assigned anything.',
}
