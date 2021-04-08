input.onButtonPressed(Button.A, function () {
    basic.showString("start")
    걸음수 = 0
    while (!(input.buttonIsPressed(Button.B))) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Giraffe)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    걸음수 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(걸음수)
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
let 걸음수 = 0
basic.showNumber(0)
basic.pause(2000)
basic.showString("Hello!")
basic.forever(function () {
    if (10 < 걸음수) {
        basic.showIcon(IconNames.Heart)
    } else if (5 < 걸음수) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
