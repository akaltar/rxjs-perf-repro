Check file:///D:/code/freelance/veed-ext/rxjs-perf-repro/redux-observable.bench.ts
cpu: AMD Ryzen 9 7950X3D 16-Core Processor
runtime: deno 1.31.3 (x86_64-pc-windows-msvc)

file:///D:/code/freelance/veed-ext/rxjs-perf-repro/redux-observable.bench.ts
benchmark time (avg) (min … max) p75 p99 p995

---

1 fake epic, 1 batched actions 293.14 µs/iter (67.8 µs … 796.6 µs) 393.2 µs 682.4 µs 712.6 µs
1 fake epics, 1 sequential actions 386.59 µs/iter (253.2 µs … 947.8 µs) 436.4 µs 633.5 µs 698.6 µs

summary
1 fake epics, 1 sequential actions
1.32x slower than 1 fake epic, 1 batched actions

1 fake epic, 5 batched actions 2.88 ms/iter (2.44 ms … 4.32 ms) 3.09 ms 4.21 ms 4.32 ms
1 fake epics, 5 sequential actions 2.27 ms/iter (2.1 ms … 3.53 ms) 2.28 ms 2.91 ms 3.29 ms

summary
1 fake epics, 5 sequential actions
1.27x faster than 1 fake epic, 5 batched actions

1 fake epic, 10 batched actions 5.54 ms/iter (4.98 ms … 8.86 ms) 5.39 ms 8.61 ms 8.86 ms
1 fake epics, 10 sequential actions 5 ms/iter (4.66 ms … 6.95 ms) 5.03 ms 6.88 ms 6.95 ms

summary
1 fake epics, 10 sequential actions
1.11x faster than 1 fake epic, 10 batched actions

1 fake epic, 50 batched actions 26.11 ms/iter (24.83 ms … 31.53 ms) 26.49 ms 31.53 ms 31.53 ms
1 fake epics, 50 sequential actions 27.51 ms/iter (25.71 ms … 33.73 ms) 28.45 ms 33.73 ms 33.73 ms

summary
1 fake epics, 50 sequential actions
1.05x slower than 1 fake epic, 50 batched actions

1 fake epic, 100 batched actions 54.96 ms/iter (50.96 ms … 64.04 ms) 58.67 ms 64.04 ms 64.04 ms
1 fake epics, 100 sequential actions 54.74 ms/iter (52.23 ms … 59.79 ms) 54.98 ms 59.79 ms 59.79 ms

summary
1 fake epics, 100 sequential actions
1x faster than 1 fake epic, 100 batched actions

1 fake epic, 500 batched actions 267.74 ms/iter (262.39 ms … 276.24 ms) 269.85 ms 276.24 ms 276.24 ms
1 fake epics, 500 sequential actions 278.37 ms/iter (269.16 ms … 301.35 ms) 282.02 ms 301.35 ms 301.35 ms

summary
1 fake epics, 500 sequential actions
1.04x slower than 1 fake epic, 500 batched actions

5 fake epic, 1 batched actions 291.14 µs/iter (69 µs … 1.43 ms) 396.8 µs 612.3 µs 649.4 µs
5 fake epics, 1 sequential actions 348 µs/iter (247.9 µs … 988.5 µs) 388.8 µs 602.8 µs 654.5 µs

summary
5 fake epics, 1 sequential actions
1.2x slower than 5 fake epic, 1 batched actions

5 fake epic, 5 batched actions 2.74 ms/iter (2.56 ms … 3.75 ms) 2.71 ms 3.75 ms 3.75 ms
5 fake epics, 5 sequential actions 2.42 ms/iter (2.22 ms … 4.25 ms) 2.44 ms 3.86 ms 4.03 ms

summary
5 fake epics, 5 sequential actions
1.13x faster than 5 fake epic, 5 batched actions

5 fake epic, 10 batched actions 5.56 ms/iter (5.19 ms … 7.58 ms) 5.67 ms 7.14 ms 7.58 ms
5 fake epics, 10 sequential actions 5.2 ms/iter (4.82 ms … 7.63 ms) 5.17 ms 7.32 ms 7.63 ms

summary
5 fake epics, 10 sequential actions
1.07x faster than 5 fake epic, 10 batched actions

5 fake epic, 50 batched actions 26.87 ms/iter (25.5 ms … 30.08 ms) 27.08 ms 30.08 ms 30.08 ms
5 fake epics, 50 sequential actions 27.07 ms/iter (25.31 ms … 33.24 ms) 26.79 ms 33.24 ms 33.24 ms

summary
5 fake epics, 50 sequential actions
1.01x slower than 5 fake epic, 50 batched actions

5 fake epic, 100 batched actions 55.15 ms/iter (52.75 ms … 59.49 ms) 55.9 ms 59.49 ms 59.49 ms
5 fake epics, 100 sequential actions 54.59 ms/iter (51.54 ms … 61.25 ms) 54.86 ms 61.25 ms 61.25 ms

summary
5 fake epics, 100 sequential actions
1.01x faster than 5 fake epic, 100 batched actions

5 fake epic, 500 batched actions 279.74 ms/iter (271.91 ms … 301.59 ms) 282.01 ms 301.59 ms 301.59 ms
5 fake epics, 500 sequential actions 283.08 ms/iter (269.18 ms … 324.12 ms) 284.05 ms 324.12 ms 324.12 ms

summary
5 fake epics, 500 sequential actions
1.01x slower than 5 fake epic, 500 batched actions

10 fake epic, 1 batched actions 289.89 µs/iter (65.1 µs … 1.25 ms) 390.1 µs 605.5 µs 691.2 µs
10 fake epics, 1 sequential actions 354.96 µs/iter (239.5 µs … 927.4 µs) 385.6 µs 642.8 µs 715.4 µs

summary
10 fake epics, 1 sequential actions
1.22x slower than 10 fake epic, 1 batched actions

10 fake epic, 5 batched actions 2.75 ms/iter (2.57 ms … 4.42 ms) 2.67 ms 4 ms 4.42 ms
10 fake epics, 5 sequential actions 2.43 ms/iter (2.27 ms … 3.56 ms) 2.44 ms 3.34 ms 3.54 ms

summary
10 fake epics, 5 sequential actions
1.13x faster than 10 fake epic, 5 batched actions

10 fake epic, 10 batched actions 5.68 ms/iter (5.21 ms … 7.58 ms) 5.89 ms 7.58 ms 7.58 ms
10 fake epics, 10 sequential actions 5.12 ms/iter (4.82 ms … 5.98 ms) 5.19 ms 5.78 ms 5.98 ms

summary
10 fake epics, 10 sequential actions
1.11x faster than 10 fake epic, 10 batched actions

10 fake epic, 50 batched actions 27.74 ms/iter (25.74 ms … 41.06 ms) 27.25 ms 41.06 ms 41.06 ms
10 fake epics, 50 sequential actions 27.04 ms/iter (25.17 ms … 31.25 ms) 27.13 ms 31.25 ms 31.25 ms

summary
10 fake epics, 50 sequential actions
1.03x faster than 10 fake epic, 50 batched actions

10 fake epic, 100 batched actions 54.4 ms/iter (52.68 ms … 58 ms) 55.01 ms 58 ms
58 ms
10 fake epics, 100 sequential actions 61.63 ms/iter (54.56 ms … 69.01 ms) 66.94 ms 69.01 ms 69.01 ms

summary
10 fake epics, 100 sequential actions
1.13x slower than 10 fake epic, 100 batched actions

10 fake epic, 500 batched actions 290.05 ms/iter (279.8 ms … 315.65 ms) 294.8 ms 315.65 ms 315.65 ms
10 fake epics, 500 sequential actions 277.15 ms/iter (270.23 ms … 289.06 ms) 277.11 ms 289.06 ms 289.06 ms

summary
10 fake epics, 500 sequential actions
1.05x faster than 10 fake epic, 500 batched actions

50 fake epic, 1 batched actions 297.06 µs/iter (74.1 µs … 1.18 ms) 387.9 µs 593 µs 683.5 µs
50 fake epics, 1 sequential actions 350.31 µs/iter (241.1 µs … 1.26 ms) 388 µs 638.6 µs 717.4 µs

summary
50 fake epics, 1 sequential actions
1.18x slower than 50 fake epic, 1 batched actions

50 fake epic, 5 batched actions 2.66 ms/iter (2.5 ms … 3.43 ms) 2.65 ms 3.39 ms 3.43 ms
50 fake epics, 5 sequential actions 2.36 ms/iter (2.17 ms … 3.63 ms) 2.33 ms 3.32 ms 3.32 ms

summary
50 fake epics, 5 sequential actions
1.13x faster than 50 fake epic, 5 batched actions

50 fake epic, 10 batched actions 5.99 ms/iter (5.23 ms … 9.4 ms) 5.91 ms 9.4 ms 9.4 ms
50 fake epics, 10 sequential actions 5.14 ms/iter (4.84 ms … 6.32 ms) 5.17 ms 6.16 ms 6.32 ms

summary
50 fake epics, 10 sequential actions
1.16x faster than 50 fake epic, 10 batched actions

50 fake epic, 50 batched actions 27.05 ms/iter (26.06 ms … 28.97 ms) 27.5 ms 28.97 ms 28.97 ms
50 fake epics, 50 sequential actions 26.96 ms/iter (25.54 ms … 32.51 ms) 27.07 ms 32.51 ms 32.51 ms

summary
50 fake epics, 50 sequential actions
1x faster than 50 fake epic, 50 batched actions

50 fake epic, 100 batched actions 56.12 ms/iter (54.28 ms … 65.22 ms) 55.71 ms 65.22 ms 65.22 ms
50 fake epics, 100 sequential actions 55.64 ms/iter (52.9 ms … 61.87 ms) 56.41 ms 61.87 ms 61.87 ms

summary
50 fake epics, 100 sequential actions
1.01x faster than 50 fake epic, 100 batched actions

50 fake epic, 500 batched actions 324.19 ms/iter (313.32 ms … 338.61 ms) 330.72 ms 338.61 ms 338.61 ms
50 fake epics, 500 sequential actions 279.04 ms/iter (272.04 ms … 293.76 ms) 281.13 ms 293.76 ms 293.76 ms

summary
50 fake epics, 500 sequential actions
1.16x faster than 50 fake epic, 500 batched actions

100 fake epic, 1 batched actions 334.01 µs/iter (76.1 µs … 1.31 ms) 445.7 µs 704.1 µs 844.1 µs
100 fake epics, 1 sequential actions 341.91 µs/iter (230.5 µs … 1.08 ms) 374.1 µs 561.8 µs 637 µs

summary
100 fake epics, 1 sequential actions
1.02x slower than 100 fake epic, 1 batched actions

100 fake epic, 5 batched actions 2.8 ms/iter (2.42 ms … 4.66 ms) 2.76 ms 4.65 ms 4.66 ms
100 fake epics, 5 sequential actions 2.35 ms/iter (2.2 ms … 3.61 ms) 2.31 ms 3.28 ms 3.4 ms

summary
100 fake epics, 5 sequential actions
1.19x faster than 100 fake epic, 5 batched actions

100 fake epic, 10 batched actions 5.49 ms/iter (5.14 ms … 7.67 ms) 5.54 ms 7 ms 7.67 ms
100 fake epics, 10 sequential actions 5.25 ms/iter (4.75 ms … 7.98 ms) 5.31 ms 7.81 ms 7.98 ms

summary
100 fake epics, 10 sequential actions
1.05x faster than 100 fake epic, 10 batched actions

100 fake epic, 50 batched actions 28.25 ms/iter (26.37 ms … 36.28 ms) 27.92 ms 36.28 ms 36.28 ms
100 fake epics, 50 sequential actions 26.41 ms/iter (25.5 ms … 29.09 ms) 26.71 ms 29.09 ms 29.09 ms

summary
100 fake epics, 50 sequential actions
1.07x faster than 100 fake epic, 50 batched actions

100 fake epic, 100 batched actions 58.35 ms/iter (56.58 ms … 64.97 ms) 58.73 ms 64.97 ms 64.97 ms
100 fake epics, 100 sequential actions 54.22 ms/iter (51.94 ms … 58.84 ms) 55.07 ms 58.84 ms 58.84 ms

summary
100 fake epics, 100 sequential actions
1.08x faster than 100 fake epic, 100 batched actions

100 fake epic, 500 batched actions 470.93 ms/iter (430.42 ms … 511.6 ms) 487.9 ms 511.6 ms 511.6 ms
100 fake epics, 500 sequential actions 276.22 ms/iter (268.48 ms … 287.48 ms) 280.23 ms 287.48 ms 287.48 ms

summary
100 fake epics, 500 sequential actions
1.7x faster than 100 fake epic, 500 batched actions

500 fake epic, 1 batched actions 335.1 µs/iter (138.2 µs … 972.2 µs) 418.3 µs 613.6 µs 663.8 µs
500 fake epics, 1 sequential actions 347.5 µs/iter (235 µs … 1 ms) 390.7 µs 606.6 µs 707.3 µs

summary
500 fake epics, 1 sequential actions
1.04x slower than 500 fake epic, 1 batched actions

500 fake epic, 5 batched actions 3.08 ms/iter (2.83 ms … 4.3 ms) 3.1 ms 3.85 ms 4.3 ms
500 fake epics, 5 sequential actions 2.4 ms/iter (2.2 ms … 3.5 ms) 2.42 ms 3.3 ms 3.33 ms

summary
500 fake epics, 5 sequential actions
1.29x faster than 500 fake epic, 5 batched actions

500 fake epic, 10 batched actions 6.72 ms/iter (6.21 ms … 10.1 ms) 6.79 ms 10.1 ms 10.1 ms
500 fake epics, 10 sequential actions 5.11 ms/iter (4.81 ms … 6.59 ms) 5.21 ms 5.9 ms 6.59 ms

summary
500 fake epics, 10 sequential actions
1.32x faster than 500 fake epic, 10 batched actions

500 fake epic, 50 batched actions 52.74 ms/iter (48.32 ms … 60.02 ms) 54.71 ms 60.02 ms 60.02 ms
500 fake epics, 50 sequential actions 27.21 ms/iter (25.55 ms … 32.34 ms) 27.64 ms 32.34 ms 32.34 ms

summary
500 fake epics, 50 sequential actions
1.94x faster than 500 fake epic, 50 batched actions

500 fake epic, 100 batched actions 190.53 ms/iter (180.08 ms … 229.53 ms) 191.85 ms 229.53 ms 229.53 ms
500 fake epics, 100 sequential actions 55.42 ms/iter (52.41 ms … 63.92 ms) 55.6 ms 63.92 ms 63.92 ms

summary
500 fake epics, 100 sequential actions
3.44x faster than 500 fake epic, 100 batched actions

500 fake epic, 500 batched actions 14.08 s/iter (13.53 s … 14.88 s) 14.42 s 14.88 s 14.88 s
500 fake epics, 500 sequential actions 323.47 ms/iter (270.22 ms … 484.61 ms) 326 ms 484.61 ms 484.61 ms

summary
500 fake epics, 500 sequential actions
43.53x faster than 500 fake epic, 500 batched actions
