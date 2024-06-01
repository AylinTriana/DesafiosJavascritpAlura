
const prompt = require("prompt-sync")({ sigint: true});

let diaDeLaSemana = prompt("¿Qué día de la semana es? ");

if (diaDeLaSemana === "sabado") {
  console.log("¡Buen fin de semana!");
} else if (diaDeLaSemana === "domingo") {
  console.log("¡Buen fin de semana!");
} else {
  console.log("¡Buena semana!");
}; 

console.log("---------------------------------");

let numero = prompt("ingrese un numero ");

if(numero >= 0) {
  console.log("El numero es positivo");
} else if (numero < 0) {
  console.log("El numero es negativo");
}

console.log("---------------------------------");

let puntuacion = prompt("Ingrese la puntuación ");

if(puntuacion >=100){
  console.log("¡Felicidades, has ganado!");
} else {
  console.log("Intenta nuevamente para ganar.");
}

console.log("---------------------------------");

let saldo = 100; 

console.log(`El saldo de su cuenta es ${saldo}`);     

console.log("---------------------------------");

let nombre = prompt("Ingrese su nombre")

console.log("Bienvenido " + nombre);

