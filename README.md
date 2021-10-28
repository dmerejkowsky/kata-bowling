# The bowling kata

*Goal: practice TDD by implementing the bowling scoring rules*

## The bowling rules

Every time you *roll* the ball, you knock a certain number of *pins* (between 0 and 10).

The game is split into *frames*, each frame containing either one or two
rolls.

If you knock all 10 pins in the first roll, it's called a *strike* and
you go to the next frame.

If you know all 10 pints in two rolls, it's called a *spare*.

## The scoring

The score can be computed frame by frame.

By default, the score is the number of pins knocked during the frame, but:

If the frame is a spare, you add 10 plus the score of the next roll.
If the frame is a strike, you add 10 plus the next two rolls.

You play fo 10 frames, but if the last frame is a strike, you get two bonus rolls.

Example:

```
roll1 roll2 score
   1    4     5
   4    5    14
   6    4    29    # spare : 10 + next roll
   5    5    49
   10  n/a   60    # strike: 10 + next 2 rolls
   0    1    61
```

## Intructions

Use TDD to implement the scoring rules. Don't try to implement the whole algorith
at once!

Check that the perfect game (12 strikes) has a score of 300.
