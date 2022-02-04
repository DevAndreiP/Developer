var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"

var player = op2
var machine = op1

function game(player, machine){

    if(player == machine){
        console.log("Es un empate")
    }else if(player == op1 && machine == op2){
        console.log("Gana Machine")
    }else if(player == op1 && machine == op3){
        console.log("Gana player")
    }else if(player == op2 && machine == op1){
        console.log("Gana player")
    }else if(player == op2 && machine == op3){
        console.log("Gana Machine")
    }else if(player == op3 && machine == op1){
        console.log("Gana Maquina")
    }else if(player == op3 && machine == op2){
        console.log("Gana Player")
    }

}
game(player,machine)