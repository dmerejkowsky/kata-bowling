class Game {
  constructor () {
    this.rolls = []
    this.rollIndex = 0
    for (let i = 0; i < 21; i++) {
      this.rolls.push(0)
    }
  }

  roll (pins) {
    this.rolls[this.rollIndex] = pins
    this.rollIndex++
  }

  isSpare (i) {
    return this.rolls[i] + this.rolls[i + 1] === 10
  }

  isStrike (i) {
    return this.rolls[i] === 10
  }

  nextTwoRollsForStrike (i) {
    return this.rolls[i + 1] + this.rolls[i + 2]
  }

  nextRollsForSpare (i) {
    return this.rolls[i + 2]
  }

  rollsInFrame (i) {
    return this.rolls[i] + this.rolls[i + 1]
  }

  score () {
    let result = 0
    let i = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(i)) {
        result += 10
        result += this.nextTwoRollsForStrike(i)
        i += 1
      } else if (this.isSpare(i)) {
        result += 10
        result += this.nextRollsForSpare(i)
        i += 2
      } else {
        result += this.rollsInFrame(i)
        i += 2
      }
    }
    return result
  }
}

exports.Game = Game
