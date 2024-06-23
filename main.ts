input.onButtonPressed(Button.B, function () {
    if (מטרה.get(LedSpriteProperty.X) == 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        game.gameOver()
    }
})
let מטרה: game.LedSprite = null
מטרה = game.createSprite(2, 2)
basic.forever(function () {
    מטרה.move(1)
    basic.pause(200)
    מטרה.ifOnEdgeBounce()
})
