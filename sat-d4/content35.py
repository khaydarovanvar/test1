# -*- coding: utf-8 -*-
"""SAT Math 3.5 — Two-Variable Data & Models."""
import algebra as A
import data as D

PTS = ((1, 5), (2, 8), (3, 10), (4, 14))
FIT = (2.9, 2)


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.5',
    'title': 'Two-Variable Data & Models',
    'sections': [
        {
            'title': 'Describing a scatterplot',
            'fact': 'say three things: direction (up or down)  |  strength (tight or '
                    'scattered)  |  form (straight or curved)',
            'text': '**Direction** is whether y rises or falls as x rises. **Strength** is '
                    'how closely the points hug a line. **Form** is whether that pattern is '
                    'a line at all — a tight parabola is a strong association but not a '
                    'linear one. The SAT asks you to name all three, and a strong curve is '
                    'the classic trap.',
            'figs': [D.assoc_panels()],
            'caption': 'Three independent judgements. The third panel is strong *and* not '
                       'linear, which is exactly the combination the test likes.',
            'examples': [
                ex('Points rise from bottom-left to top-right and lie very close to a line. '
                   'Describe the association.',
                   ['**Strong positive linear association.** Rising is positive, hugging '
                    'the line is strong, straight is linear.'],
                   D.scatter(((1, 2.6), (2, 5.4), (3, 8.1), (4, 11.2), (5, 13.8)),
                             line_mc=(2.8, -0.2), label=None, xmax=6, ymax=16,
                             note='tight about a rising line')),
                ex('Points fall as x rises but are widely scattered. Describe it.',
                   ['**Weak negative linear association.** Falling is negative; the '
                    'scatter makes it weak.'],
                   D.scatter(((1, 13), (2, 6), (3, 11), (4, 4), (5, 8), (6, 2)),
                             line_mc=(-1.7, 14), label=None, xmax=7, ymax=16,
                             note='falling, but the points sit well off the line')),
                ex('Points rise, level off, then fall, forming a tight arch. Is this a strong '
                   'linear association?',
                   ['**No.** It is a strong association but not a linear one.',
                    'Strength and form are separate judgements, and a line of best fit '
                    'would describe this badly.'],
                   D.scatter(((1, 4), (2, 9), (3, 12), (4, 12), (5, 9), (6, 4)),
                             line_mc=None, label=None, xmax=7, ymax=16,
                             note='a tight arch — strong, but not linear')),
            ],
        },
        {
            'title': 'The line of best fit',
            'fact': 'the line of best fit minimises the total squared vertical distance  |  '
                    'in Desmos type y₁~mx₁+b under a table',
            'text': 'The line **does not have to pass through any data point**, and usually '
                    'passes through none. Its **slope** is the predicted change in y for a '
                    'one-unit rise in x, and its **y-intercept** is the predicted y when x '
                    'is zero — which may be meaningless in context.',
            'figs': [D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2')],
            'caption': 'Four points and the line Desmos reports. It misses every one of '
                       'them, which is normal and not an error.',
            'examples': [
                ex('For the data (1, 5), (2, 8), (3, 10), (4, 14), Desmos reports '
                   'y = 2.9x + 2. What does 2.9 mean?',
                   ['For every increase of 1 in x, the model predicts y rises by about '
                    '**2.9**.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2',
                             note='the slope is a predicted rise per unit of x')),
                ex('What does the intercept 2 mean in that model?',
                   ['It is the predicted value of y when x = 0, so **about 2**.',
                    'If x = 0 is outside the data range, this is extrapolation and may '
                    'have no sensible meaning.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', predict=(0, 2),
                             note='x = 0 lies outside the data, which ran from 1 to 4')),
                ex('Does the line pass through (3, 10)?',
                   ['At x = 3 the line gives 2.9(3) + 2 = **10.7**, not 10.',
                    '**No** — a line of best fit need not pass through any data point.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(3, 10),
                             note='the point sits 0.7 below the line')),
            ],
        },
        {
            'title': 'Predicting from a model',
            'fact': 'substitute the x you are given  |  inside the data range is '
                    'interpolation, outside is extrapolation',
            'text': 'Prediction is just substitution. The judgement the SAT tests is whether '
                    'the prediction is **trustworthy**: inside the range of the data it '
                    'usually is; far outside it, the model has no evidence behind it and the '
                    'prediction is unreliable however neat the arithmetic.',
            'figs': [D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', predict=(4, 13.6),
                               note='x = 4 is inside the data, so this is interpolation')],
            'caption': 'Read up from the x you are given, across to the y the line gives. '
                       'Whether to trust it depends only on where x sits.',
            'examples': [
                ex('Using y = 2.9x + 2, predict y when x = 4.',
                   ['2.9(4) + 2 = 11.6 + 2 = **13.6**.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', predict=(4, 13.6))),
                ex('The data covers x from 1 to 4. How much should you trust a prediction at '
                   'x = 30?',
                   ['**Very little.** x = 30 is far outside the data, so this is '
                    '**extrapolation** — the model has no evidence that the pattern '
                    'continues that far.'],
                   A.rules_panel((('x between 1 and 4', 'interpolation — supported by '
                                                        'the data'),
                                  ('x = 30', 'extrapolation — no evidence at all')),
                                 title='the arithmetic is fine; the evidence is not',
                                 w=340)),
                ex('Using y = 2.9x + 2, for what x does the model predict y = 25?',
                   ['2.9x + 2 = 25, so 2.9x = 23 and x = 23/2.9 ≈ **7.93**.'],
                   A.flow(('2.9x + 2 = 25', '2.9x = 23', 'x = 23 ÷ 2.9', 'x ≈ 7.93'))),
            ],
        },
        {
            'title': 'Residuals',
            'fact': 'residual = actual − predicted  |  positive means the point sits above '
                    'the line',
            'text': 'A residual measures **one point’s miss**. Subtract in that order every '
                    'time: **actual first**. A residual plot with no pattern says a line was '
                    'the right model; a residual plot with a curve says it was not.',
            'figs': [D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(4, 14))],
            'caption': 'The red segment is the residual: the vertical gap from the line up '
                       'to the actual point, +0.4 here.',
            'examples': [
                ex('The model predicts 13.6 and the actual value is 14. Find the residual.',
                   ['14 − 13.6 = **+0.4**. Positive, so the point lies just **above** the '
                    'line.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(4, 14))),
                ex('The model predicts 10.7 and the actual value is 10. Find the residual.',
                   ['10 − 10.7 = **−0.7**. Negative, so this point lies **below** the '
                    'line.'],
                   D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(3, 10))),
                ex('A residual plot shows a clear U shape. What does that tell you?',
                   ['The straight-line model is **not appropriate** — the data curves, '
                    'and a line systematically over- then under-predicts.'],
                   D.residual_plot('u')),
            ],
        },
        {
            'title': 'Correlation is not causation',
            'fact': 'an association shows two things move together  |  only a randomised '
                    'experiment shows one causes the other',
            'text': 'This is tested **in words, not numbers**. However strong the '
                    'association, an observational study cannot establish cause. Watch for a '
                    '**lurking third variable** that drives both quantities.',
            'figs': [D.lurking()],
            'caption': 'Two arrows out of one cause, and no arrow between the two effects. '
                       'That missing arrow is the whole point.',
            'examples': [
                ex('Ice-cream sales and swimming accidents rise together. Does ice cream '
                   'cause accidents?',
                   ['**No.** Hot weather raises both — a lurking variable.',
                    'The association is real; the causal claim is not.'],
                   D.lurking()),
                ex('A study finds students who own more books score higher. Can the school '
                   'conclude books raise scores?',
                   ['**No.** This is observational, so it shows association only.',
                    'Family income could drive both.'],
                   D.lurking(cause='family income', a='books owned',
                             b='test scores')),
                ex('What would be needed to support a causal claim?',
                   ['**A randomised controlled experiment**: assign students to conditions '
                    'at random, so the groups differ only in the treatment.'],
                   A.rules_panel((('observational study', 'association only'),
                                  ('random assignment', 'cause can be claimed')),
                                 title='only one design licenses the word ‘causes’',
                                 w=330)),
            ],
        },
        {
            'title': 'Exponential against linear growth',
            'fact': 'constant difference → linear  |  constant ratio → exponential',
            'text': 'Check the table before choosing a model. **Subtract** consecutive '
                    'y-values: if those differences are about equal, the model is linear. '
                    '**Divide** consecutive y-values instead: if those ratios are about '
                    'equal, it is exponential. Exponential growth eventually overtakes any '
                    'linear growth.',
            'figs': [A.diff_ratio_table((1, 2, 3, 4), (3, 6, 12, 24), kind='exponential')],
            'caption': 'Test the table both ways every time. Here the differences grow but '
                       'the ratios hold at 2, so the model is exponential.',
            'examples': [
                ex('y goes 3, 7, 11, 15 as x goes 1, 2, 3, 4. Which model fits?',
                   ['Differences 4, 4, 4 are constant, so the model is **linear, '
                    'y = 4x − 1**.'],
                   A.diff_ratio_table((1, 2, 3, 4), (3, 7, 11, 15), kind='linear')),
                ex('y goes 3, 6, 12, 24. Which model fits?',
                   ['Ratios 2, 2, 2 are constant, so the model is **exponential, '
                    'y = 1.5(2)ˣ**.'],
                   A.diff_ratio_table((1, 2, 3, 4), (3, 6, 12, 24), kind='exponential')),
                ex('y goes 100, 90, 81, 72.9. Linear or exponential?',
                   ['Differences −10, −9, −8.1 are **not** constant, but ratios are all '
                    '0.9.',
                    '**Exponential decay**, falling 10% each step.'],
                   A.diff_ratio_table((0, 1, 2, 3), (100, 90, 81, 72.9),
                                      kind='exponential')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. This is the one data '
                    'topic where Desmos really earns its place: **type a table and the '
                    'regression line y₁~mx₁+b**, and it reports the slope and intercept '
                    'directly.',
    'desmos': [
        ('A table lists (1, 5), (2, 8), (3, 10) and (4, 14). What is the slope of the line of '
         'best fit, to one decimal place?', 'y_1~mx_1+b',
         'Enter the table, then type the regression under it.', '2.9'),
        ('For that same data, what is the y-intercept of the line of best fit?',
         'y_1~mx_1+b', 'Desmos reports m and b together.', '2'),
        ('Using y = 2.9x + 2, what value does the model predict when x = 4?', '2.9*4+2',
         'Substitute and let Desmos evaluate.', '13.6'),
        ('The actual value at x = 4 is 14 and the model predicts 13.6. What is the residual?',
         '14-(2.9*4+2)', 'Actual minus predicted, in that order.', '0.4'),
        ('Using y = 2.9x + 2, for what value of x does the model predict y = 25? Round to two '
         'decimal places.', '(25-2)/2.9', 'Solve the linear equation in one line.', '7.93'),
        ('A table shows y = 3, 6, 12, 24 for x = 1, 2, 3, 4. What is the common ratio?',
         '6/3', 'Divide consecutive terms to test for an exponential model.', '2'),
        ('A population of 1200 falls by 8% each year. What is it after 5 years, to the '
         'nearest whole number?', '1200*0.92^5', 'A fall of 8% means a factor of 0.92.',
         '791'),
        ('A line of best fit is y = 4x − 1. What does it predict at x = 9?', '4*9-1',
         'Interpolation or extrapolation depends on the data range, but the arithmetic is '
         'the same.', '35'),
        ('Data points are (2, 11) and (6, 23). What is the slope of the line through them?',
         '(23-11)/(6-2)', 'Rise over run.', '3'),
        ('A model predicts 72.9 and the actual value is 70. What is the residual, to one '
         'decimal place?', '70-72.9', 'A negative residual means the point is below the '
         'line.', '−2.9'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Three things get tested: **what the slope and intercept mean**, **how '
                   'far the model may be trusted**, and **what the data does and does not '
                   'let you claim**.',
    'part2': [
        ('P1', 'Hard',
         'The scatterplot shows four data points and the line of best fit y = 2.9x + 2. What '
         'value does the model predict when x = 4?', '13.6',
         ['2.9(4) + 2 = 11.6 + 2 = **13.6**.',
          'A common wrong answer drops the intercept; C is the actual data value, not the '
          'prediction.'],
         D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', predict=(4, 13.6))),
        ('P2', 'Hard',
         'For the data shown, the line of best fit is y = 2.9x + 2 and the actual value at '
         'x = 4 is 14. What is the residual at x = 4?', '0.4',
         ['Residual = actual − predicted = 14 − 13.6 = **0.4**.',
          'Positive, so the point sits **above** the line.'],
         D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(4, 14))),
        ('P3', 'Hard',
         'A scatterplot of hours studied against test score shows points rising steeply and '
         'lying very close to a straight line. Which best describes the association?',
         'Strong positive linear',
         ['Rising is positive; points close to the line make it strong; straight makes it '
          'linear.',
          '**Strong positive linear.** A common wrong answer would need a visible curve.'],
         D.assoc_panels()),
        ('P4', 'Hard',
         'In the model y = 2.9x + 2 relating x hours of training to y units produced, what is '
         'the best interpretation of 2.9?',
         'The predicted rise in output for each extra hour of training.',
         ['A slope is a **rate of change**: per extra unit of x, y is predicted to rise by '
          '2.9.',
          'A common wrong answer describes the intercept.'],
         D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2',
                   note='slope = predicted rise in y for one more hour of x')),
        ('P5', 'Hard',
         'A table shows y = 3, 6, 12, 24 as x = 1, 2, 3, 4. Which type of model best fits the '
         'data?', 'Exponential, because the ratios are constant',
         ['Differences are 3, 6, 12 — not constant. Ratios are 2, 2, 2 — constant.',
          'A constant ratio means **exponential**. The pairing of reason to conclusion is '
          'what is being tested.'],
         A.diff_ratio_table((1, 2, 3, 4), (3, 6, 12, 24), kind='exponential')),
        ('P6', 'Hard',
         "A town's population of 1200 decreases by 8% each year. To the nearest whole number, "
         'what is the population after 5 years?', '791',
         ['A fall of 8% multiplies by 0.92 each year.',
          '1200(0.92)⁵ = 790.89… ≈ **791**. Subtracting 8% of 1200 five times would give '
          '720, which is the common error.'],
         D.percent_bars(((100, 'start 1200', D.S1), (92, 'after 1 year', D.S3),
                         (65.9, 'after 5 years', D.S3)),
                        note='0.92⁵ = 0.6591, so 791 — not 1200 − 5(96) = 720')),
        ('P7', 'Very hard',
         'A study finds that towns with more bookshops have higher average exam results. '
         'State the best-supported conclusion.',
         'There is an association, but a third factor such as household income may explain '
         'both.',
         ['The study is **observational**, so it supports association only. A lurking '
          'variable such as income can raise both.',
          'A causal claim would need random assignment, which no town study can provide.'],
         D.lurking(cause='household income', a='bookshops in town',
                   b='average exam result')),
        ('P8', 'Very hard',
         'For a set of data the line of best fit is y = 2.9x + 2. At x = 3 the actual value '
         'is 10. What is the residual, and what does its sign mean?',
         '−0.7; the point is below the line',
         ['Predicted = 2.9(3) + 2 = 10.7. Residual = 10 − 10.7 = **−0.7**.',
          'Negative means the actual value is **below** the prediction. A common wrong '
          'answer reverses the subtraction.'],
         D.scatter(PTS, line_mc=FIT, label='y = 2.9x + 2', residual=(3, 10))),
        ('P9', 'Very hard',
         'The data used to build the model y = 2.9x + 2 covers x from 1 to 4. A manager uses '
         'it to predict the value at x = 30. Which is the best criticism?',
         'x = 30 is far outside the data range, so the prediction is unreliable.',
         ['2.9(30) + 2 = 89 is arithmetically fine, but x = 30 is well beyond the '
          'evidence.',
          'This is **extrapolation**, and nothing in the data shows the pattern '
          'continues.'],
         A.rules_panel((('data collected', 'x from 1 to 4 only'),
                        ('prediction wanted', 'x = 30'),
                        ('verdict', 'extrapolation — unreliable')),
                       title='the arithmetic works; the evidence runs out', w=340)),
        ('P10', 'Very hard',
         'A residual plot for a linear model shows the residuals forming a clear U shape '
         'rather than scattering randomly. What does this indicate?',
         'A linear model is not appropriate for this data.',
         ['A pattern in the residuals means the model is **missing structure** in the '
          'data.',
          'A line is the wrong model here — the relationship curves. A good residual plot '
          'looks like random scatter about zero.'],
         D.residual_plot('u')),
        ('P11', 'Very hard',
         'Two quantities are recorded: y = 100, 90, 81, 72.9 as x = 0, 1, 2, 3. A student '
         'says the data is linear because y keeps falling by about the same amount. Why is '
         'the student wrong, and what model fits?',
         'The differences are −10, −9, −8.1, which are not constant; the ratios are all 0.9, '
         'so the model is exponential decay.',
         ['Differences −10, −9, −8.1 shrink; ratios 90/100 = 81/90 = 72.9/81 = 0.9 are '
          'constant.',
          'A constant ratio below 1 is **exponential decay**, a 10% fall each step. Over a '
          'short run a decay curve can look almost straight, which is exactly the trap.'],
         A.diff_ratio_table((0, 1, 2, 3), (100, 90, 81, 72.9), kind='exponential')),
        ('P12', 'Very hard',
         'Data points (2, 11) and (6, 23) lie on a line of best fit. What does the model '
         'predict at x = 10?', '35',
         ['Slope = (23 − 11)/(6 − 2) = 12/4 = 3, and 11 = 3(2) + b gives b = 5.',
          'At x = 10: 3(10) + 5 = **35**.'],
         D.scatter(((2, 11), (6, 23)), line_mc=(3, 5), label='y = 3x + 5',
                   predict=(10, 35), xmax=11, ymax=40)),
    ],
    'habit': 'A line of best fit is evidence **only inside the range it was built from**, and '
             'only ever about **association**. Two of these twelve are answered by refusing '
             'to overclaim — and that refusal is the correct answer, not a dodge.',
}
