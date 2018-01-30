[Haskell](www.haskell.org/) is a thing. TidalCycles is written in Haskell so we get to use it inside
of TidalCycles if we want. This means we can add custom functionality like
bells, whistles or even a [molecular
nanoassembler](http://en.wikipedia.org/wiki/Molecular_assembler). The sky is the
limit! Anything our hearts desire.  
Below here is something I remember fondly from
[SClang](http://supercollider.github.io/). It's like `choose` but it also lets
us decide on a likeliness for each of the different possible outcomes.  
We need to run this line on it's own first so that TidalCycles can learn this new word
before we start using it.

```haskell
let wchoose values weights = choose $ concatMap (\x -> replicate (fst x) (snd x)) (zip values weights)
```

`wchoose` takes two arrays. First the list of values, then the list of weights.
The amount of values in the two arrays have to be the same or this thing wont
work.

```haskell
d1
$ s "bass1:2*7?"
# rel 0.3
# up (slow 0.1 $ wchoose [0,2,3,5,7,8,11] [7,6,5,4,3,2,1])
```

In the example below I used `wchoose` for most of the things but `choose` for
`pan` because I wanted all of my values for `pan` to be equally likely to occur.
Mix and match to taste. Follow your ears and you'll find your way.

```haskell
d1
$ s "bass3*8"
# shape (slow 0.1 $ wchoose [0,0.7,0.8,0.9,0.95] [24,12,6,3,1])
# pan (slow 0.11 $ choose [0,0.25,0.5,0.75,1])
# up (slow 0.12 $ wchoose [0,14,15,17,19,20,23,24] [24,20,16,12,8,6,4,2,1])
# release (slow 0.13 $ scalex 0.25 1.5 $ rand)
# cut (slow 0.14 $ wchoose [0,1] [8,1])
# lpf (slow 0.15 $ wchoose [20000,10000,5000,2500,1250,625,312] [64,32,16,8,4,2,1] )
# hpf (slow 0.16 $ wchoose [20000,10000,5000,2500,1250,625,312,156] [1,2,4,8,16,32,64,128])
# gain (slow 0.17 $ wchoose [1,1.3,1.6,1.9] [8,4,2,1])
# orbit 1
# delayt 0
# delay (1/4)
# delayfb (1/8)
```
