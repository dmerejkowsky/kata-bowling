const test = require('tape')

const bowling = require('../src/bowling')

class GameTest extends bowling.Game {
  rollMany (count, value) {
    for (let i = 0; i < count; i++) {
      this.roll(value)
    }
  }

  rollSpare () {
    this.roll(5)
    this.roll(5)
  }

  rollStrike () {
    this.roll(10)
  }
}

test('scrore is 0 after a gutter', function (t) {
  const game = new GameTest()
  game.roll(0)
  const score = game.score()
  t.equal(score, 0)
  t.end()
})

test('all ones', function (t) {
  const game = new GameTest()
  game.rollMany(20, 1)
  const score = game.score()
  t.equal(score, 20)

  t.end()
})

test('one spare', function (t) {
  const game = new GameTest()
  game.rollSpare()
  game.roll(3)
  game.rollMany(17, 0)
  const score = game.score()
  t.equal(score, 16)

  t.end()
})

test('one strike', function (t) {
  const game = new GameTest()
  game.rollStrike()
  game.roll(3)
  game.roll(4)
  game.rollMany(16, 0)

  const score = game.score()
  t.equal(score, 24)

  t.end()
})

test('perfect game', function (t) {
  const game = new GameTest()
  for (let i = 0; i < 12; i++) {
    game.rollStrike()
  }
  const score = game.score()
  t.equal(score, 300)
  t.end()
})
