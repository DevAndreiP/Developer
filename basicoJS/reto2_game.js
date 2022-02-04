var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"

var player = op1
var machine = op3

function game(player, machine){

    switch(true){
        case player == machine:
            console.log("Es un empate") 
        break;
        case player == op1 && machine == op3 || player == op3 && machine ==  op2 || player == op2 && machine == op1:
            console.log("Gana Player")
            break;
        default: 
        console.log("Gana Machine")
        break;
    }
}

game(player,machine)