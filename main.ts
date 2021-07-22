scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`myTile6`)
    music.baDing.play()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
let coin: Sprite = null
let statusbar: StatusBarSprite = null
game.setDialogTextColor(5)
game.setDialogFrame(img`
    ..................................................................
    ............fff........fff.............fff..............ffff......
    ...........fddbf......fbdbf...........fbdbf............fbddf......
    ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
    ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
    ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
    .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
    .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
    .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
    .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
    ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
    ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
    ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
    ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
    ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
    ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
    ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
    ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
    .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
    .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
    .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
    ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
    .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
    ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
    .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
    .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
    ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
    .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
    .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
    .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
    ......fddbf............fbdbf...........fbdbf......fbddf...........
    ......ffff..............fff.............fff........fff............
    ..................................................................
    `)
game.showLongText("Sara's adventure", DialogLayout.Center)
tiles.setTilemap(tilemap`level1`)
scene.cameraShake(4, 500)
pause(500)
game.showLongText("Oh No! looks like you got trapped in this abandoned temple! Or at least you think its abandoned....", DialogLayout.Top)
let Skeleton = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 . 1 1 1 . 1 . . . . . 
    . . . . 1 . 1 1 1 . 1 . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(Skeleton, assets.tile`myTile4`)
scene.cameraFollowSprite(Skeleton)
game.showLongText("This is a skeleton. They hurt you. Avoid them or face the consequences.", DialogLayout.Top)
let Sara = sprites.create(img`
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
tiles.placeOnRandomTile(Sara, assets.tile`myTile5`)
scene.cameraFollowSprite(Sara)
controller.moveSprite(Sara)
info.setScore(0)
Skeleton.follow(Sara, 50)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Sara)
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
}
forever(function () {
    animation.runImageAnimation(
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
        . d 6 6 6 6 6 d . . . . . . . . 
        . . 8 8 8 8 8 . . . . . . . . . 
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
    true
    )
})
forever(function () {
    animation.runImageAnimation(
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
    200,
    true
    )
})
