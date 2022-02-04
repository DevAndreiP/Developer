var estudiantes = ["Andrei", "Ricardo", "Alexandra", "Jorge", "Brandon"]

function saludarEstudiantes(estudiante){

    console.log(`Hola, ${estudiante}`)

}
// While
for(var i=0;i < estudiantes.length; i++){

     saludarEstudiantes(estudiantes[i])

}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante) 
}

//While
while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift(); //generar una variable con el metodo de mutación que va a estar sacando los elementos del array.
    saludarEstudiantes(estudiante)
     
}

 