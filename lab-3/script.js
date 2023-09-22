const game = {
    wood:0,
    marshmallows:3,
    fire:false,
    tent: false
}
function help () {
    console.log("To pitch the tent, use pitch!")
    console.log("To gather the wood, use search!")
    console.log("To start or stop the fire, use tend!")
    console.log("To roast the marshmallows, use roast!")
    console.log("To sleep and end the game, use sleep!")
}

function pitch () {
    game.tent = true
    console.log ("You pitched the tent")
}

function search () {
    if (!game.fire ){
        game.wood++
        console.log ("You gathered some wood")
    }
    else {
            console.log("You can't gather woods if you already started the fire!")
    }
}

function tend () {
    if (game.fire == false && game.wood > 0) {
        game.fire = true 
        game.wood-- 
        console.log("You started the fire")
    }
    else if (game.fire == true ) {
        game.fire = false
        console.log ("You put off the fire")
    }
    else {
        console.log("You can't start the fire without wood!")
    }
}

function roast () {
    if(game.fire == true && game.marshmallows > 0) {
        game.marshmallows--
        console.log("You can roast marshmallows")
    }
    else if (game.fire == false) {
        console.log ("You can't roast marshmallows without a fire!")
    }
    else {
        console.log ("You don't have any more marshmallows!")
    }
}

function sleep () {
    if (game.fire == true && game.tent == true) {
    console.log("You went to sleep")
    game.wood = 0
    game.marshmallows = 3
    game.fire = false
    game.tent = false
    }
    else{
        console.log ("You can't go to sleep")
    }
}