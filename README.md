1. npm ci
2. UNDICI_VERSION=6.15.0 node --max-old-space-size=32 . (ok)
3. UNDICI_VERSION=6.16.0 node --max-old-space-size=32 . (crash)
4. UNDICI_VERSION=6.16.1 node --max-old-space-size=32 . (crash)
5. UNDICI_VERSION=6.19.7 node --max-old-space-size=32 . (ok)

```
% UNDICI_VERSION=6.16.0 node --max-old-space-size=32 .
0 7MB
100 10MB
200 9MB
300 11MB
400 9MB
500 8MB
600 11MB
700 10MB
800 10MB
900 12MB
1000 11MB
1100 14MB
1200 16MB
1300 12MB
1400 14MB
1500 16MB
1600 12MB
1700 14MB
1800 16MB
1900 19MB
2000 15MB
2100 17MB
2200 15MB
2300 17MB
2400 19MB
2500 14MB
2600 14MB
2700 15MB
2800 15MB
2900 15MB
3000 16MB
3100 16MB
3200 16MB
3300 17MB
3400 17MB
3500 17MB
3600 17MB
3700 18MB
3800 18MB
3900 18MB
4000 19MB
4100 19MB
4200 19MB
4300 20MB
4400 20MB
4500 20MB
4600 21MB
4700 21MB
4800 21MB
4900 22MB
5000 22MB
5100 23MB
5200 24MB
5300 23MB
5400 23MB
5500 25MB
5600 25MB
5700 24MB
5800 26MB
5900 26MB
6000 25MB
6100 25MB
6200 25MB
6300 26MB
6400 27MB
6500 26MB
6600 27MB
6700 27MB
6800 27MB
6900 28MB
7000 28MB
7100 29MB
7200 29MB
7300 29MB

<--- Last few GCs --->

[2410:0x120008000]     1684 ms: Scavenge 28.9 (31.5) -> 28.4 (31.5) MB, 0.21 / 0.00 ms  (average mu = 0.366, current mu = 0.409) task;
[2410:0x120008000]     1685 ms: Scavenge 29.1 (31.5) -> 28.5 (31.5) MB, 0.12 / 0.00 ms  (average mu = 0.366, current mu = 0.409) task;
[2410:0x120008000]     1687 ms: Scavenge 29.5 (31.5) -> 28.7 (33.7) MB, 0.25 / 0.00 ms  (average mu = 0.366, current mu = 0.409) allocation failure;


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```
