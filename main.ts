scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(Sara, tiles.getTileLocation(10, 7))
})
function Level_1 () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(Sara, assets.tile`myTile5`)
    scene.cameraFollowSprite(Sara)
    for (let index = 0; index <= 4; index++) {
        coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(coin, assets.tile`myTile0`)
        characterAnimations.loopFrames(
        coin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
    scene.cameraShake(4, 500)
    pause(500)
    game.showLongText("Oh No! looks like you got trapped in this abandoned temple! Or at least you think its abandoned....", DialogLayout.Top)
    game.showLongText("Gather these ancient coins and make your way to the dorway. Looks like theres a chest in the corner...", DialogLayout.Bottom)
    slime_thing = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f 7 7 7 7 7 7 7 f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 f f f 7 7 f . . 
        f 7 7 7 7 f 1 7 f 1 7 7 7 7 f . 
        f 7 7 7 7 f f 7 f f 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 f f f f f 7 7 7 7 f . 
        f 7 7 7 7 7 7 2 2 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(slime_thing, assets.tile`myTile4`)
    scene.cameraFollowSprite(slime_thing)
    pause(500)
    game.showLongText("This is a slime thing. They spawn on these red spawners while you spawn on green. They hurt you. Avoid them or face the consequences.", DialogLayout.Top)
    scene.cameraFollowSprite(Sara)
    slime_thing.follow(Sara, 50)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`myTile6`)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(Sara, tiles.getTileLocation(10, 7))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`myTile6`)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    slime_thing.destroy()
    tiles.placeOnRandomTile(Sara, assets.tile`myTile8`)
    statusbar.value = 30
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
let slime_thing: Sprite = null
let coin: Sprite = null
let statusbar: StatusBarSprite = null
let Sara: Sprite = null
game.setDialogTextColor(5)
game.setDialogFrame(assets.tile`myTile`)
game.showLongText("Sara's adventure", DialogLayout.Center)
Sara = sprites.create(img`
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 d d 2 2 . . . 
    . . . . 2 d d d 2 d d d 2 2 . . 
    . . . . 2 d 1 d d 1 d d 2 2 . . 
    . . . . 2 d 8 d d 8 d d 2 2 . . 
    . . . . 2 d 1 d d 1 d d 2 2 2 . 
    . . . . . d d d d d d d 2 2 2 . 
    . . . . . . d d d d d . 2 2 2 . 
    . . . . . . . d d d . . . 2 2 . 
    . . . . . 6 6 6 d 6 6 6 . . 2 . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . d 6 6 6 6 6 d . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
controller.moveSprite(Sara)
statusbar.max = 30
statusbar.attachToSprite(Sara)
info.setScore(0)
Level_1()
forever(function () {
    characterAnimations.loopFrames(
    Sara,
    [img`
        . 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 d d 2 2 . . . . . . . 
        2 d d d 2 d d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 . . . . . . 
        2 d 8 d d 8 d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 2 . . . . . 
        . d d d d d d d 2 2 2 . . . . . 
        . . d d d d d . 2 2 2 . . . . . 
        . . . d d d . . . 2 2 . . . . . 
        . 6 6 6 d 6 6 6 . . 2 . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . d 6 6 6 6 6 6 . . . . . . . . 
        . . 8 8 8 8 8 d . . . . . . . . 
        . . 8 8 . 8 8 . . . . . . . . . 
        . . f f . f f . . . . . . . . . 
        . f f f . f f f . . . . . . . . 
        `,img`
        . 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 d d 2 2 . . . . . . . 
        2 d d d 2 d d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 . . . . . . 
        2 d 8 d d 8 d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 2 . . . . . 
        . d d d d d d d 2 2 2 . . . . . 
        . . d d d d d . 2 2 2 . . . . . 
        . . . d d d . . . 2 2 . . . . . 
        . 6 6 6 d 6 6 6 . . 2 . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . d 6 6 6 6 6 d . . . . . . . . 
        . . 8 8 8 8 8 . . . . . . . . . 
        . . 8 8 . 8 8 . . . . . . . . . 
        . . f f . f f . . . . . . . . . 
        . f f f . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 d d 2 2 . . . . . . . 
        2 d d d 2 d d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 . . . . . . 
        2 d 8 d d 8 d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 2 . . . . . 
        . d d d d d d d 2 2 2 . . . . . 
        . . d d d d d . 2 2 2 . . . . . 
        . . . d d d . . . 2 2 . . . . . 
        . 6 6 6 d 6 6 6 . . 2 . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . 6 6 6 6 6 6 d . . . . . . . . 
        . d 8 8 8 8 8 . . . . . . . . . 
        . . 8 8 . 8 8 . . . . . . . . . 
        . . f f . f f . . . . . . . . . 
        . f f f . f f f . . . . . . . . 
        `,img`
        . 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 d d 2 2 . . . . . . . 
        2 d d d 2 d d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 . . . . . . 
        2 d 8 d d 8 d d 2 2 . . . . . . 
        2 d 1 d d 1 d d 2 2 2 . . . . . 
        . d d d d d d d 2 2 2 . . . . . 
        . . d d d d d . 2 2 2 . . . . . 
        . . . d d d . . . 2 2 . . . . . 
        . 6 6 6 d 6 6 6 . . 2 . . . . . 
        . 6 6 6 6 6 6 6 . . . . . . . . 
        . d 6 6 6 6 6 d . . . . . . . . 
        . . 8 8 8 8 8 . . . . . . . . . 
        . . 8 8 . 8 8 . . . . . . . . . 
        . . f f . f f . . . . . . . . . 
        . f f f . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.Moving)
    )
})
