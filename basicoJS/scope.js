var miNombre = "Andrei"

function nombre(){
    var miApellido = "Pérez" //Aquí estoy en Scope Local
    console.log(miNombre + " " + miApellido)
}
//Aquí estoy en Scope Global
//si yo hago lo siguiente saldrá un error porque la variable está en un scope local y no se puede consultar fuera del mismo.

console.log(miApellido)