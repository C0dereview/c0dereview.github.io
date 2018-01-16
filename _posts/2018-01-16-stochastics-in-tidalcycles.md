---
layout: post
title:  "Stochastics in TidalCycles"
date:   2018-01-16 13:39:00 +0100
author: Daniel M Karlsson
categories: tutorial
tags: TidalCycles tutorial
---

## Stochastics in TidalCycles

All stochastic operations in TidalCycles default to using the same stream of
random numbers because Haskell. In the example below the panning is slanted to
the right. We can hear that there's something missing on the left. We can fix
this by reading the random stream at a different speed. It's best we don't think
about this too hard because it could unravel the very fabric of the space time
continuum and destroy the entire universe if we do (no state in Haskell). For
our intents and purposes doing it this way we get to think about our results as
a unique stream of random numbers for each of the two parameters. This fixes the
problem with the panning and we can think about getting a Computer Science
degreee later (I would be so proud of you!).

```shell
d1
$ s "gab*8?"
# pan rand
```

Compare the above example to the one just below here.

```shell
d1
$ s "gab*8?"
# pan (slow 0.1 $ rand)
```

Here is an example with more parameters that each get a unique random stream.

```shell
d1
$ s "gab*9?"
# pan (slow 0.1 $ rand)
# n (slow 0.11 $ choose [0..10])
# lpf (slow 0.12 $ scalex 160 20000 $ rand)
# rel (slow 0.13 $ scale 0.1 0.9 $ rand)
# gain (slow 0.14 $ scale 1 2 $ rand)
# up (slow 0.15 $ scale (-9) 0 $ rand)
# cut (slow 0.16 $ choose [0,0,0,1])
# resonance (slow 0.17 $ scale 0 0.5 $ rand)
# shape (slow 0.18 $ scale 0 0.999999 $ rand)
# loop (slow 0.19 $ choose [0..49])
# end (slow 0.2 $ scalex 0.05 1 $ rand) 
```
