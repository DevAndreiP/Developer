var a = 4 + "7"

/* El ejecutar en consola el comando typeof a nos saldrá que está guardando un string, lo que está haciendo acá es que está haciendo una coerción implicita
lo cual significa que lo está tomando como una concatenación entre 4 y el 7 y da como resultado 47. 

El operador de + entre dos tipos diferentes de tipo de datos lo que hace JS es la concatenación*/

var b = 4 * "7"

/* Aquí si hay otra operación y hay con coerción implicita y da como resultado 28, como es un operador de multiplicación los valores en cuestión deben ser
numero, lo que significa que JS no tema el 7 como un string si no como un numero, si colocamos typeof b nos dirá que es un "number"*/

/* Coerción explicita a continuación */

var c = 20;
var d = c + "";

/* al realizar el typeof de d saldrá que es un string porque ha sido concatenado con un string "".
.
.
.
.

a continuación, como se vuelve un string un numero sin necesidad de hacer una concatenación
*/

var e = String(c) //se realiza con el metodo String() y se convierte en un String

var f = Number(e) //aqui se convierte nuevamente en un numero

