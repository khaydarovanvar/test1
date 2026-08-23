# -*- coding: utf-8 -*-
"""Grade 7 paper, English-only edition."""
from examlib import build, frac, mixed, S2, S3

MATH = [
 ("Simplify the expression: 5a + 3a - 2a",
  ["10a", "6a", f"6a{S2}", "5a", "3a"]),
 ("Find the value of the expression 3x + 7 when x = 4.",
  ["19", "12", "17", "21", "11"]),
 ("Solve the equation: 4x - 9 = 15",
  ["x = 4", "x = 5", "x = 6", "x = 8", "x = 3"]),
 (f"Calculate: 3 &divide; {frac(3, 4)}",
  [frac(1, 4), frac(9, 4), mixed(2, 1, 4), "3", "4"]),
 (f"Calculate: {frac(2, 3)} &divide; {frac(4, 9)}",
  [frac(8, 27), frac(2, 3), "3", mixed(1, 1, 2), frac(1, 2)]),
 ("In a class there are 12 boys and 18 girls. Find the ratio of the number of boys "
  "to the number of girls in its simplest form.",
  ["3 : 2", "12 : 18", "2 : 3", "4 : 6", "1 : 2"]),
 ("Divide 90 in the ratio 2 : 3 : 4. Find the largest part.",
  ["20", "30", "45", "40", "50"]),
 ("Find the number whose 30% is equal to 45.",
  ["135", "150", "15", "120", "145"]),
 ("The price of a product rose from 200 000 so'm to 250 000 so'm. "
  "By what percentage did the price increase?",
  ["20%", "50%", "25%", "30%", "125%"]),
 ("A car travelled 240 km in 3 hours. Find its speed.",
  ["80 km/h", "72 km/h", "60 km/h", "90 km/h", "120 km/h"]),
 (f"The volume of a cuboid is 240 cm{S3}, its length is 8 cm and its width is 6 cm. "
  "Find its height.",
  ["5 cm", "6 cm", "4 cm", "8 cm", "10 cm"]),
 ("Two angles of a triangle are 65&deg; and 50&deg;. Find the third angle.",
  ["65&deg;", "50&deg;", "60&deg;", "70&deg;", "75&deg;"]),
 ("The diameter of a circle is 10 cm. Find the circumference of the circle.",
  ["5&pi; cm", "20&pi; cm", "10&pi; cm", "25&pi; cm", "100&pi; cm"]),
 ("Find the area of a circle with radius 4 cm.",
  [f"8&pi; cm{S2}", f"16&pi; cm{S2}", f"4&pi; cm{S2}", f"32&pi; cm{S2}", f"64&pi; cm{S2}"]),
 ("A figure consists of a rectangle 10 cm &times; 6 cm and a square with a side of 4 cm. "
  "Find the area of the figure.",
  [f"72 cm{S2}", f"80 cm{S2}", f"66 cm{S2}", f"70 cm{S2}", f"76 cm{S2}"]),
 ("Which solid figure has one vertex and a circular base?",
  ["Cylinder", "Cone", "Prism", "Pyramid", "Cube"]),
 ("During the day a snail climbs 3 m up a wall, and during the night it slides 2 m back down. "
  "The wall is 5 m high. On which day will the snail reach the top?",
  ["Day 5", "Day 3", "Day 4", "Day 2", "Day 6"]),
 ("Continue the sequence: 1, 2, 6, 24, 120, ...",
  ["240", "600", "720", "620", "150"]),
 ("Anna is twice as old as her brother. In 5 years she will be one and a half times "
  "as old as him. How old is Anna now?",
  ["8", "10", "12", "15", "20"]),
 ("3 cats catch 3 mice in 3 minutes. How many cats are needed to catch 100 mice in 100 minutes?",
  ["100", "33", "9", "3", "300"]),
]

ENG = [
 ("What is special about the Vegetable Orchestra?",
  ["They only play in Vienna", "They make their instruments from vegetables",
   "They never give concerts", "They sell vegetables at the market", "They play very quietly"]),
 ("Why do the musicians spend hours at the market before a concert?",
  ["Because the market is very far away", "Because they want to eat before playing",
   "Because each vegetable must be the right shape for a good sound",
   "Because vegetables are difficult to buy", "Because they enjoy shopping together"]),
 ("According to the text, what is made from carrots?",
  ["drums", "trumpets", "soup", "flutes", "guitars"]),
 ("What do the musicians do with the vegetables after the concert?",
  ["They throw them away", "They give them back to the market",
   "They make soup and share it with the audience", "They keep them for the next concert",
   "They plant them in a garden"]),
 ('The word "audiences" in the text means:',
  ["the people who make the instruments",
   "the people who watch and listen to the concert", "the cooks in the kitchen",
   "the vegetables on the stage", "the musicians in the orchestra"]),
 ("It was raining heavily, so we couldn't put up our ______ and had to sleep in the car.",
  ["torch", "sleeping bag", "tent", "backpack", "compass"]),
 ("You need to ______ the vegetables into small pieces before you put them in the soup.",
  ["boil", "chop", "pour", "bake", "freeze"]),
 ("A ______ is a musical instrument that you play by pressing black and white keys.",
  ["violin", "drum", "trumpet", "flute", "piano"]),
 ('"The weather was <u>freezing</u>." The underlined word is closest in meaning to:',
  ["very hot", "very cold", "very wet", "very windy", "very sunny"]),
 ("My brother is very ______ ; he can sing, dance and play three instruments.",
  ["lazy", "boring", "talented", "careless", "nervous"]),
 ("Solar panels use energy from the sun, which is a clean ______ of energy.",
  ["source", "sauce", "sort", "sound", "search"]),
 ('Choose the correct word: "We had a wonderful ______ at the campsite near the lake last summer."',
  ["journey", "experiment", "experience", "exhibition", "tour"]),
 ("Yesterday we ______ to the mountains and had a picnic near the river.",
  ["go", "goes", "went", "have gone", "going"]),
 ("Last winter ______ colder than this winter.",
  ["is", "was", "were", "has been", "be"]),
 ("When I was six, I ______ swim, but now I can.",
  ["can", "couldn't", "can't", "don't", "wasn't"]),
 ("Listen! The children ______ a song in the next room.",
  ["sing", "sings", "sang", "are singing", "have sung"]),
 ("This is the ______ film I have ever seen.",
  ["good", "better", "best", "most good", "well"]),
 ("______ you help me carry these bags, please?",
  ["Must", "Could", "Should", "Did", "Will to"]),
 ("There ______ many people at the concert last night.",
  ["was", "is", "were", "are", "be"]),
 ("She sings ______ than her sister.",
  ["beautiful", "more beautiful", "beautifully", "more beautifully", "most beautifully"]),
]

PASSAGE_TITLE = "The Vegetable Orchestra"
PASSAGE = [
 "In the city of Vienna, there is a very unusual group of musicians called the Vegetable "
 "Orchestra. Instead of buying normal instruments, the members make their own instruments "
 "from fresh vegetables. They use carrots to make flutes, pumpkins to make drums, and peppers "
 "to make trumpets. Before every concert, the musicians go to the market and spend several "
 "hours choosing and cutting the vegetables, because each vegetable must be exactly the right "
 "shape to produce a good sound.",
 "The orchestra has been playing concerts around the world for more than twenty years. Their "
 "music sounds strange but beautiful, and audiences are always surprised by it. After each "
 "performance, the musicians do not throw the vegetables away. Instead, the cooks make hot "
 "vegetable soup and share it with the audience. In this way, nothing is wasted, and everybody "
 "leaves the concert with something to enjoy.",
]

PARTS = [
 ("Part 1. READING &mdash; Read the text and answer questions 21&ndash;25.", 21, 25, True),
 ("Part 2. VOCABULARY &mdash; Questions 26&ndash;32. Choose the best option.", 26, 32, False),
 ("Part 3. GRAMMAR &mdash; Questions 33&ndash;40. Choose the correct answer.", 33, 40, False),
]

if __name__ == "__main__":
    out = build(7, MATH, ENG, PASSAGE_TITLE, PASSAGE,
                math_split=((0, 7), (7, 7), (14, 6)),
                part_ranges=PARTS, out_html="exam_grade7_en.html")
    print("wrote", out)
