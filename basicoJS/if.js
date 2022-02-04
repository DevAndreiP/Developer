var edad = 18;

if(edad === 18){
    console.log("Eres apto para votar, será tu primera votación")
}else if(edad > 18){
    console.log("Puedes votar de nuevo")
}else{
    console.log("No tienes la edad necesaria para votar te faltan " + (18 - edad) + " años")
}
//condicional if con operador ternario

var numero = 1;

var resultado = numero === 1 ? console.log("Si, si soy un uno") : console.log("No, no soy un uno")