# -*- coding: utf-8 -*-
"""Grade 8 paper, English-only edition."""
from examlib import build, frac, S2, S3, S4

MATH = [
 ("Calculate: -7 + 12 - (-5)", ["0", "10", "-10", "24", "14"]),
 ("Calculate: (-8) &middot; (-3) - 20 &divide; (-4)", ["19", "44", "29", "-29", "24"]),
 (f"Multiply the monomials: 3x{S2}y &middot; (-4xy{S3})",
  [f"-12x{S3}y{S4}", f"12x{S3}y{S4}", f"-12x{S2}y{S3}", f"-7x{S3}y{S4}", f"-12x{S3}y{S3}"]),
 ("Collect the like terms: 5a - 3b + 2a + 7b",
  ["7a - 4b", "3a + 4b", "7a + 4b", "7a + 10b", "12ab"]),
 (f"Expand the brackets using the formula: (x + 3){S2}",
  [f"x{S2} + 9", f"x{S2} + 3x + 9", f"x{S2} + 9x + 6", f"x{S2} - 6x + 9", f"x{S2} + 6x + 9"]),
 (f"Factorise: x{S2} - 25",
  [f"(x - 5){S2}", f"(x + 5){S2}", "x(x - 25)", "cannot be factorised", "(x - 5)(x + 5)"]),
 (f"Factorise: 6x{S2} + 9x",
  [f"3(2x{S2} + 3)", "3x(2x + 3)", "x(6x + 3)", "3x(2x + 9)", "6x(x + 9)"]),
 (f'Simplify the algebraic fraction: {frac(f"x{S2} - 4", "x + 2")}',
  ["x + 2", f"x{S2} - 2",
   frac("x - 2", "x + 2"),
   "x - 2", "2 - x"]),
 ("Solve the equation: 5(x - 2) = 2x + 8",
  ["x = 2", "x = 4", "x = 6", "x = -6", "x = 3"]),
 ("The linear function y = 2x - 3 is given. Find the value of y when x = 4.",
  ["5", "8", "11", "-5", "3"]),
 ("Solve the system of equations: x + y = 10, x - y = 4.",
  ["(3; 7)", "(7; 3)", "(6; 4)", "(5; 5)", "(8; 2)"]),
 ("One of two adjacent angles is 68&deg;. Find the other angle.",
  ["22&deg;", "68&deg;", "112&deg;", "122&deg;", "102&deg;"]),
 ("In an isosceles triangle the angle at the vertex is 40&deg;. Find the angle at the base.",
  ["70&deg;", "40&deg;", "140&deg;", "50&deg;", "60&deg;"]),
 ("One of the acute angles of a right-angled triangle is 35&deg;. Find the other acute angle.",
  ["55&deg;", "65&deg;", "45&deg;", "145&deg;", "35&deg;"]),
 ("Two angles of a triangle are 45&deg; and 60&deg;. Find the exterior angle at the third vertex.",
  ["75&deg;", "115&deg;", "105&deg;", "95&deg;", "120&deg;"]),
 ("Two triangles are congruent by two sides and the angle between them. Which criterion of congruence of triangles is this?",
  ["The second criterion", "The first criterion", "The third criterion",
   "The Pythagorean theorem", "The Thales theorem"]),
 ("Continue the sequence: 1, 4, 13, 40, 121, ...",
  ["242", "363", "364", "360", "484"]),
 ("At a meeting each of 6 people shook hands with every other person exactly once. How many handshakes were there in total?",
  ["36", "30", "15", "12", "21"]),
 ("One pipe fills a pool in 6 hours, another one in 3 hours. In how many hours will the pool be filled if both pipes are opened together?",
  ["4.5 h", "9 h", "2 h", "3 h", "1.5 h"]),
 ("There are 8 coins that look identical, but one of them is slightly heavier. What is the smallest number of weighings on a pair of scales that is guaranteed to find it?",
  ["1", "2", "3", "4", "7"]),
]

ENG = [
 ("How often do the Paralympic Games take place?",
  ["Every year", "Every two years", "Every four years", "Every ten years", "Only once"]),
 ("When and where were the first Paralympic Games held?",
  ["In Rome in 1960", "In London in 1948", "In Athens in 1896", "In Rome in 1906", "In Tokyo in 1964"]),
 ("According to the text, how have the Paralympic Games changed since 1960?",
  ["Fewer countries take part now", "They now take place before the Olympics",
   "Many more athletes and countries now take part",
   "They are no longer shown on television", "Only 400 athletes still compete"]),
 ("What does the writer say is more important than physical strength alone?",
  ["money", "fame", "luck", "determination", "equipment"]),
 ("The main message of the second paragraph is that:",
  ["Olympic athletes train harder than Paralympic athletes",
   "Paralympic athletes inspire people and change attitudes to disability",
   "winning medals is the only goal of the Games",
   "accidents always end a sports career",
   "the Games are too expensive to organise"]),
 ("To go snowboarding safely, you should always wear a ______ to protect your head.",
  ["glove", "helmet", "racket", "whistle", "net"]),
 ('"How ______ do you go swimming?" "About three times a week."',
  ["much", "many", "long", "often", "far"]),
 ("She felt really ______ before the exam, but she calmed down once it started.",
  ["bored", "nervous", "relaxed", "delighted", "confident"]),
 ("The concert was absolutely ______ &mdash; everyone stood up and cheered at the end.",
  ["terrible", "awful", "fantastic", "ordinary", "disappointing"]),
 ("A person who plays a musical instrument very well is a skilled ______.",
  ["musician", "music", "musical", "audience", "orchestra"]),
 ('"I get up, have breakfast and brush my teeth." These are examples of a daily ______.',
  ["routine", "root", "reason", "result", "record"]),
 ('"The film was <u>awesome</u>." The underlined word is closest in meaning to:',
  ["very boring", "quite short", "extremely good", "a little strange", "very frightening"]),
 ("My father usually ______ to work by car, but today he is taking the bus.",
  ["go", "goes", "is going", "went", "going"]),
 ("Look! Tom ______ his new bike in the park right now.",
  ["rides", "is riding", "rode", "ride", "has ridden"]),
 ("We had a great time at the party. The music ______ amazing.",
  ["is", "are", "was", "were", "be"]),
 ("I don't like ______ early on cold winter mornings.",
  ["get up", "to getting up", "getting up", "got up", "gets up"]),
 ("How ______ eggs do we need to make the cake?",
  ["much", "many", "more", "a lot", "lots of"]),
 ("They ______ tennis every Sunday when they were young.",
  ["play", "plays", "are playing", "played", "have played"]),
 ("She is the ______ student in our class.",
  ["clever", "cleverer", "more clever", "cleverest", "most cleverest"]),
 ("I usually walk to school, ______ today I came by bus because it was raining.",
  ["because", "so", "but", "and", "or"]),
]

PASSAGE_TITLE = "The Paralympic Games"
PASSAGE = [
 "The Paralympic Games are a major sports event for athletes with physical disabilities. "
 "They take place every four years, a few weeks after the Olympic Games, and in the same host "
 "city. The first Paralympic Games were held in Rome in 1960, when only 400 athletes from 23 "
 "countries took part. Today, thousands of athletes from more than 160 countries compete, and "
 "millions of people watch the events on television.",
 "Paralympic athletes train just as hard as Olympic athletes, sometimes even harder. Many of "
 "them have inspiring stories: some were born with a disability, while others had accidents that "
 "changed their lives. Instead of giving up, they decided to become professional sportspeople. "
 "Their achievements show that determination is more important than physical strength alone. "
 "Because of this, the Paralympic Games are not only about winning medals &mdash; they also "
 "change the way people think about disability.",
]

PARTS = [
 ("Part 1. READING &mdash; Read the text and answer questions 21&ndash;25.", 21, 25, True),
 ("Part 2. VOCABULARY &mdash; Questions 26&ndash;32. Choose the best option.", 26, 32, False),
 ("Part 3. GRAMMAR &mdash; Questions 33&ndash;40. Choose the correct answer.", 33, 40, False),
]

if __name__ == "__main__":
    out = build(8, MATH, ENG, PASSAGE_TITLE, PASSAGE,
                math_split=((0, 7), (7, 7), (14, 6)),
                part_ranges=PARTS, out_html="exam_grade8_en.html")
    print("wrote", out)
