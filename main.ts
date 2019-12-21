input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (score))
    hand = Math.randomRange(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    score = 0
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    if (score == 9) {
        score = 10
        basic.showString("W")
    } else {
        score += 1
        basic.showNumber(score)
    }
})
input.onButtonPressed(Button.A, function () {
    if (score > 0) {
        score += -1
        basic.showNumber(score)
    }
})
let hand = 0
let score = 0
score = 0
basic.showNumber(score)
