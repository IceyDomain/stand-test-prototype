namespace SpriteKind {
    export const Stand_Giver = SpriteKind.create()
    export const Star_Platinum_StandUser = SpriteKind.create()
    export const Magicians_Red_StandUser = SpriteKind.create()
    export const Hermit_Purple_StandUser = SpriteKind.create()
    export const Hierophant_Green_StandUser = SpriteKind.create()
    export const Silver_Chariot_StandUser = SpriteKind.create()
    export const The_Fool_StandUser = SpriteKind.create()
    export const The_World_StandUser = SpriteKind.create()
    export const Tower_of_Gray_StandUser = SpriteKind.create()
    export const Dark_Blue_Moon_StandUser = SpriteKind.create()
    export const Strength_StandUser = SpriteKind.create()
    export const Ebony_Devil_Stand_User = SpriteKind.create()
    export const Yellow_Temperance_StandUser = SpriteKind.create()
    export const Hanged_Man_StandUser = SpriteKind.create()
    export const Emperor_StandUser = SpriteKind.create()
    export const Empress_StandUser = SpriteKind.create()
    export const Wheel_of_Fortune_StandUser = SpriteKind.create()
    export const Justice_StandUser = SpriteKind.create()
    export const Lovers_StandUser = SpriteKind.create()
    export const Sun_StandUser = SpriteKind.create()
    export const Death_Thirteen_StandUser = SpriteKind.create()
    export const Judgement_StandUser = SpriteKind.create()
    export const High_Priestess_StandUser = SpriteKind.create()
    export const Geb_StandUser = SpriteKind.create()
    export const Khnum_StandUser = SpriteKind.create()
    export const Tohth_StandUser = SpriteKind.create()
    export const Anubis = SpriteKind.create()
    export const Bastet_StandUser = SpriteKind.create()
    export const Sethan_StandUser = SpriteKind.create()
    export const Osiris_StandUser = SpriteKind.create()
    export const Horus_StandUser = SpriteKind.create()
    export const Atum_StandUser = SpriteKind.create()
    export const Tenore_Sax_StandUser = SpriteKind.create()
    export const Cream_StandUser = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.kind() == SpriteKind.Star_Platinum_StandUser && controller.A.isPressed()) {
    	
    }
})
function Hometown () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(33, 45))
    Stardust_Arc_Stands = [
    SpriteKind.Star_Platinum_StandUser,
    SpriteKind.Magicians_Red_StandUser,
    SpriteKind.Hermit_Purple_StandUser,
    SpriteKind.Hierophant_Green_StandUser,
    SpriteKind.Silver_Chariot_StandUser,
    SpriteKind.The_Fool_StandUser,
    SpriteKind.The_World_StandUser,
    SpriteKind.Tower_of_Gray_StandUser,
    SpriteKind.Dark_Blue_Moon_StandUser,
    SpriteKind.Strength_StandUser,
    SpriteKind.Ebony_Devil_Stand_User,
    SpriteKind.Yellow_Temperance_StandUser,
    SpriteKind.Hanged_Man_StandUser,
    SpriteKind.Emperor_StandUser,
    SpriteKind.Empress_StandUser,
    SpriteKind.Wheel_of_Fortune_StandUser,
    SpriteKind.Justice_StandUser,
    SpriteKind.Lovers_StandUser,
    SpriteKind.Sun_StandUser,
    SpriteKind.Death_Thirteen_StandUser,
    SpriteKind.Judgement_StandUser,
    SpriteKind.High_Priestess_StandUser,
    SpriteKind.Geb_StandUser,
    SpriteKind.Khnum_StandUser,
    SpriteKind.Tohth_StandUser,
    SpriteKind.Anubis,
    SpriteKind.Bastet_StandUser,
    SpriteKind.Sethan_StandUser,
    SpriteKind.Osiris_StandUser,
    SpriteKind.Horus_StandUser,
    SpriteKind.Atum_StandUser,
    SpriteKind.Tenore_Sax_StandUser,
    SpriteKind.Cream_StandUser
    ]
    Stand_arrow = sprites.create(img`
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . . . . 2 2 4 4 
        . . . . . . . . . . . . 2 4 4 5 
        . . . . . . . . . . . 2 f 5 5 4 
        . . . . . . . . . . 2 2 f 4 4 4 
        . . . . . . . . 2 2 2 5 2 4 4 4 
        d d d b f 4 f 4 5 5 2 4 2 4 4 4 
        c c c c f c f e e 4 c 4 c 4 2 2 
        . . . . . . . . e e c 4 c 2 2 2 
        . . . . . . . . . . c e f 2 e e 
        . . . . . . . . . . . e f e e e 
        . . . . . . . . . . . . f e e e 
        . . . . . . . . . . . . e e e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . . . e e 
        `, SpriteKind.Stand_Giver)
    tiles.placeOnRandomTile(Stand_arrow, sprites.castle.tileGrass1)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stand_Giver, function (sprite, otherSprite) {
    sprite.startEffect(effects.clouds, 5000)
    sprite.startEffect(effects.starField, 5000)
    controller.moveSprite(mySprite, 0, 0)
    pause(2000)
    if (Math.percentChance(50)) {
        sprite.setKind(Stardust_Arc_Stands._pickRandom())
        if (sprite.kind() == SpriteKind.Star_Platinum_StandUser) {
            game.setDialogFrame(img`
                ...cc..............................cc.....
                ..c55c..bbbb...bbbbb...bbbbb......c55c....
                .cb55bcbfffbbbbbfffbbbbbfffbbbbbbcb55bc...
                b555555bbfffb888bfffb888bfffb88db555555b..
                bb5555bbbbfb88888bfb88888bfb8888bb5555bb..
                cb5555bcfff88888fff88888fff88888cb5555bc..
                .c5bb5c8888d888d888d888d888d888ddc5bb5c...
                .cbbbbc88888888888888888888888888cbbbbc...
                ..b8888888888888888888888888888888fffbb...
                ..b88888888888888888888888888888888fbbfb..
                ..bb88888888888fff88888ffffffffff88fbffb..
                .bbfb8d888888fffff88888ffffffffffffffffb..
                .bffff888888ffffff88888ffffffffffff8bfbb..
                .bffbf8888ffffffff888888888888fffff88bb...
                .bfb8f8888ffffffff888888888888ffff8888b...
                .bb888d888fff88fff88888888888ffff88888b...
                ..b888888888888fff8888888888fffff8d888bb..
                ..b888888888888fff888888888fffff888f8bfb..
                ..bb88888888888fff88888888fffff8888fbffb..
                .bbfb8d88888888fff88888888ffff88888ffffb..
                .bffff888888888fff8888888ffff88888d8bfbb..
                .bffbf888888888fff888888fffff88888888bb...
                .bfb8f8888fffffffffff88fffff8888888888b...
                .bb888d888fffffffffff88ffff88888888888b...
                ..b8888888fffffffffff88fff88888888d888bb..
                ..b88888888888888888888888888888888f8bfb..
                ..bb8888888888888888888888888888888fbffb..
                .bbfb8d8888888888888888888888888888ffffb..
                .bffff8888888888888888888888888888d8bfbb..
                .bffbf8888888888888888888888888888888bb...
                .bfbb888888888888888888888888888888888b...
                .bbbd888888888888888888888888888888888b...
                ..bcc88888888888888888888888888888dccdb...
                ..c55c8888888d888d888d888d888d8888c55cb...
                .cb55bcff88888fff88888fff88888fffcb55bc...
                b555555bf8888bfb88888bfb88888bfbb555555b..
                bb5555bbff88bfffb888bfffb888bfffbb5555bb..
                cb5555bcbbbbbbfffbbbbbfffbbbbbffcb5555bc..
                .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
                .cbbbbc..........................cbbbbc...
                ..........................................
                ..........................................
                `)
            game.setDialogTextColor(10)
            game.showLongText("Stand Obtained: The Star", DialogLayout.Top)
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (sprite.kind() == SpriteKind.Magicians_Red_StandUser) {
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .bd111111111111111111db.
                bd1dbbbbbbbbbbbbbbbbd1db
                b1dbbbbbbbbbbbbbbbbbbd1b
                b1bd1111111111111111db1b
                b1b11111111f111111111b1b
                b1b1111111ff111111111b1b
                b1b111111f1f111111111b1b
                b1b11111111f111111111b1b
                b1b11111111f111221111b1b
                b1b22111111f122222211b1b
                b1b224444ffff22222222b1b
                b1b222444222442222222b1b
                b1b222222222224422222b1b
                b1b222222222222222222b1b
                b1b222222224442222442b1b
                b1b222222222244222222b1b
                b1b222222222222222222b1b
                b1b222222222222222222b1b
                b1bd2222222222222222db1b
                bd1bbbbbbbbbbbbbbbbbb1db
                bbd111111111111111111dbb
                .bbbbbbbbbbbbbbbbbbbbbb.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.setDialogTextColor(4)
            game.showLongText("Stand Obtained: The Magician", DialogLayout.Top)
        } else if (sprite.kind() == SpriteKind.Hermit_Purple_StandUser) {
            game.setDialogFrame(img`
                ..bbabbaabbaabbaabbbbb..
                .bccbaccbaccbaccbabbccb.
                accccbaccbaccbaccbacccca
                accccbbaabbaabbaabbcccca
                abccb11111111111111bccba
                bbab1111111111111111bbab
                babb1111111111111111bacb
                abca111111fff1111111acca
                acca111111f1f1111111acba
                bcab111111f1f1111111bbab
                babb111111fff1111111bacb
                abca11111111f1111111acca
                acca11111111f1111111acba
                bcabaa111111f1111111bbab
                babbaaaa111111111111bacb
                abcaaaaaaaaaaaaa1111acca
                accaaaaaaaaaaaaaaaa1acba
                bcabaaaaaaaaaaaaaaaabbab
                babbaaaaaaaaaaaaaaaababb
                abccbaaaaaaaaaaaaaabccba
                accccbbaabbaabbaabbcccca
                accccabccabccabccabcccca
                .accbbabccabccabccabcca.
                ..aaabbaabbaabbaabbaaa..
                `)
            game.setDialogTextColor(12)
            game.showLongText("Stand Obtained: The Hermit", DialogLayout.Top)
        } else if (sprite.kind() == SpriteKind.Hierophant_Green_StandUser) {
            game.setDialogFrame(img`
                88888..8888888888888888....88888.
                87768888777877787778777888867778.
                87777686777877767778777688777778.
                87777767777677777776777786777768.
                8677776777767777777677778677778..
                .877768777686777776867778667768..
                .886668888888888888888888886688..
                .888888866666666666666668877768..
                88677786666666666666666668777778.
                87777786666666666666666668777778.
                8777778666666ffff666666668677778.
                8777768666666f666666666668866888.
                8886688666666f666666666668677778.
                8777768666666ffff666666668777778.
                8777778766666666f666666668777778.
                8777778777666666f667776668777688.
                8867778777776ffff777777668777778.
                87777787777777777777777768777778.
                87777787777777777777777778677778.
                87777687777777777777777778866888.
                88866887777777777777777778677778.
                87777687777777777777777778777778.
                87777787777777777777777778777778.
                87777787777777777777777778777688.
                .867778877777777777777778888888..
                .886688888888888888888888866688..
                .867766877768677777686777867778..
                .8777768777767777777677776777768.
                86777768777767777777677776777778.
                87777788677787776777877768677778.
                87776888877787778777877788886778.
                88888..88888888888888888....8888.
                .................................
                `)
            game.setDialogTextColor(6)
            game.showLongText("Stand Obtained: The High Erophant", DialogLayout.Top)
        } else if (sprite.kind() == SpriteKind.Silver_Chariot_StandUser) {
            color.setPalette(
            color.SteamPunk
            )
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .bd111111111111111111db.
                bd1dbbbbbbbbbbbbbbbbd1db
                b1dbbbbbbbbbbbbbbbbbbd1b
                b1bd1111111111111111db1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b1111111fffff111111b1b
                b1b11111111111f111111b1b
                b1b1111111111f1111111b1b
                b1b111111111f11111111b1b
                b1b11111111f111111111b1b
                b1b1111111f1111111111b1b
                b1b111111f11111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1bd1111111111111111db1b
                bd1bbbbbbbbbbbbbbbbbb1db
                bbd111111111111111111dbb
                .bbbbbbbbbbbbbbbbbbbbbb.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.setDialogTextColor(13)
            game.showLongText("Stand Obtained: The Chariot", DialogLayout.Top)
            color.setPalette(
            color.originalPalette
            )
        } else if (sprite.kind() == SpriteKind.The_Fool_StandUser) {
            game.setDialogFrame(img`
                ..................................................................
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555115555555555555511555555555555551155555555555555115.
                .5555555555551111555555555555111155555555555511115555555555551111.
                .5555555555551111555555555555111155555555555511115555555555551111.
                .5115555555111111511555555511111151155555551111115115555555111111.
                .1111555511111111111155551111111111115555111111111111555511111111.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555115555555555555511555555555555551155555555555555115555555555.
                .5511111155555555551111115555555555111111555555555511111155555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .555555555555555555555555555fffffff555555555555555555555555555555.
                .5555555555555555555555555fffffffff555555555555555555555555555555.
                .555555555555555555555555fffffffffff55555555555555555555555555555.
                .55555555555555555555555fffffff5fffff5555555555555555555555555555.
                .5555555555555555555555ffffff555fffff5555555555555555555555555555.
                .5555555555555555555555ffff555555ffff5555555555555555555555555555.
                .5555555555555555555555fff55555555fff5555555555555555555555555555.
                .5555555555555555555555fff55555555ffff555555555555555555555555555.
                .555555555555555555555ffff55555555ffff555555555555555555555555555.
                .555555555555555555555ffff55555555ffff555555555555555555555555555.
                .555555555555555555555ffff555555555fff555555555555555555555555555.
                .555555555555555555555fff5555555555fff555555555555555555555555555.
                .555555555555555555555fff5555555555fff555555555555555555555555555.
                .555555555555555555555ffff555555555fff555555555555555555555555555.
                .555555555555555555555ffff555555555fff555555555555555555555555555.
                .555555555555555555555fffff5555555ffff555555555555555555555555555.
                .5555555555555555555555fffff555555ffff555555555555555555555555555.
                .5555555555555555555555ffffff55fffffff555555555555555555555555555.
                .55555555555555555555555fffffffffffff5555555555555555555555555555.
                .555555555555555555555555fffffffffff55555555555555555555555555555.
                .555555555555555555555555555fffff55555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555555555555555555555555555555555555555555555555555555555555.
                .5555555666555555555555566555555555555556655555555555556665555555.
                .5555556676655555555555666655555555555566665555555555566766555555.
                .5555556777666555555555677655555555555567765555555556667776555555.
                .5555556777676555555665677655555555566567765555555556767776555555.
                .5556656777676555555676677655555555567667765555555556767776566555.
                .5567656777676555555676677656655555567667765665555556767776567655.
                .5567666777776555555676677667655555567667766765555556777776667655.
                .5567666777665555555677777667655555567777766765555555667776667655.
                .5566777777655555555667777677655555566777767765555555567777776655.
                .5556666777655566665566777776556666556677777655666655567776666555.
                .5555556777656667766636777666666776663677766666677666567776555555.
                .5555556777666777777666777666677777766677766667777776667776555555.
                .5666666777667777777766777666777777776677766677777777667776666665.
                .6677766777677777777776777667777777777677766777777777767776677766.
                .6777776777677777777776777667777777777677766777777777767776777776.
                ..................................................................
                `)
            game.setDialogTextColor(13)
            game.showLongText("Stand Obtained: The Fool", DialogLayout.Top)
        } else if (sprite.kind() == SpriteKind.The_World_StandUser) {
            game.setDialogFrame(img`
                6877778777783666999999333399999933339999cccccc99
                87777777777786693999939999399993999939cc33b333c9
                8788877788878999933339999993333999999c33bb333b3c
                6788877788876999999999111199999911119c33b33bb33c
                7777777777777669199991999919999199991cbb33b333bc
                337777777773366691111999999111199999bcbbbb333b3c
                337776667773377659999555555999955555b1ddbb3bbb3c
                337776667773377659999555555999955555b1ddbb3bbb3c
                77766ddd66777776555555555555555555555b11dbb333c9
                666ddddddd666dd65555555555555555555555bb1ccccc99
                ddddddddddddddd6555555555555555555555555bb999399
                ddddddddddddd66955555555555555555555555559199939
                666666666666655555555555555555555555555559911993
                699999999999555555555555555555555555555559911993
                699999995555555555555555555555555555555559911993
                699999995555555555555555555555555555555559911993
                9399919555555555fffff5555555f5555555555559199939
                9399919555555555f555f5555555f5555555555595999399
                939991955555555f5555f5555555f5555555555595999399
                39955955555555555555f5555555f5555555555595999399
                99555555555555555555f5555555f5555555555555555599
                9955555555555555555ff5555555f5555555555555555999
                995555555555555555ff55555555f5555555555555559999
                99555555555555555ff555555555f5555555555555555999
                999555555555555ff55555555555f5555555555555555599
                999955555555555f555555555555f5555555555555555599
                999555555555555fffffff555555f5555555555555555599
                9955555555555555555555555555f5555555555555555599
                995555555555555555555555555555555555555555555999
                995555555555555555555555555555555555555555559999
                995555555555555555555555555555555555555555559999
                999555555555555555555555555555555555555555555999
                99d5555555555555555555555555555555555dd555555599
                9ddd555555555555555555555555555555555dd555555599
                9ddd5555555555dd555555555555555555555dd5555dd599
                9d1d555555555ddddd55555555555ddddd555ddd555ddd99
                9ddd555ddd555d111d5555ddddd55d111d55dddd555ddd99
                9d1d55ddddd55ddddd5555ddddd55ddddd55d1dd555ddd99
                9ddd55d1d1d55d111d5dd5d1ddd55d111d55dddddddddd99
                9d1d55ddddd55ddddd5dd5ddd1d55ddddddddd1ddd111ddd
                dddd55d1d1d55d111d5dd5ddddd55d111ddddddddddddddd
                dd1d5ddddddddddddd5dd5d1ddddddddddddd1dddd111ddd
                dddd5dd1d1dddd111dddddddd1dddd111ddddddddddddddd
                dd1d5ddddddddddddddddddddddddddddddddd1ddd111ddd
                ddddddddddddddddddddddd1dddddddddddddddddddddddd
                ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
                .dddddddddddddddddddddddddddddddddddddddddddddd.
                ..dddddddddddddddddddddddddddddddddddddddddddd..
                `)
            game.setDialogTextColor(13)
            game.showLongText("Stand Obtained: The World", DialogLayout.Top)
        } else if (sprite.kind() == SpriteKind.Tower_of_Gray_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Dark_Blue_Moon_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Strength_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Ebony_Devil_Stand_User) {
        	
        } else if (sprite.kind() == SpriteKind.Yellow_Temperance_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Hanged_Man_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Emperor_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Empress_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Wheel_of_Fortune_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Justice_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Lovers_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Sun_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Death_Thirteen_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Judgement_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.High_Priestess_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Geb_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Khnum_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Tohth_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Anubis) {
        	
        } else if (sprite.kind() == SpriteKind.Bastet_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Sethan_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Osiris_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Horus_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Atum_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Tenore_Sax_StandUser) {
        	
        } else if (sprite.kind() == SpriteKind.Cream_StandUser) {
        	
        }
    } else if (Math.percentChance(50)) {
    	
    }
    tiles.placeOnRandomTile(Stand_arrow, sprites.castle.tileGrass1)
    controller.moveSprite(mySprite)
})
let mySprite2: Sprite = null
let Stand_arrow: Sprite = null
let Stardust_Arc_Stands: number[] = []
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("Jojo Bizarre adventure")
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.setLife(100)
Hometown()
