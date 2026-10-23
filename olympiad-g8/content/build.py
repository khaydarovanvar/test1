# -*- coding: utf-8 -*-
"""Build every data file the Grade 8 site reads.

    python3 content/build.py

Writes assets/data/topics.js (the whole breakdown) and, for each lesson
source g8_NN.py that exists, assets/data/lessons/lNN.js plus the index the
hub page uses to tell written topics from the ones still to come.
"""

import importlib
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import common   # noqa: E402
import topics   # noqa: E402

#  The lessons that have been written. Add a number here once its g8_NN.py
#  exists, and the hub page starts linking to it.
WRITTEN = [1, 2, 9]


def main():
    topics.build()
    entries = []
    for n in WRITTEN:
        mod = importlib.import_module("g8_%02d" % n)
        entries.append(common.write(mod.LESSON))
    common.write_index(entries)

    planned = len(topics.TOPICS)
    print("\n%d of %d topics written; %d problems in all"
          % (len(entries), planned, sum(e["problems"] for e in entries)))


if __name__ == "__main__":
    main()
