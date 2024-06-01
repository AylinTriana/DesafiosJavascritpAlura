const prompt = require("prompt-sync")({ sigint: true});

console.log("Bienvenido");

let nombre = "Aylin"; 

console.log(`¡Hola, ${nombre}!` );

// alert(`¡Hola, ${nombre}!` );

console.log("---------------------------------");

let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta? ");

console.log(pregunta);

console.log("---------------------------------");

let valor1 = 5;
let valor2 = 7;

let resultado = (valor1 + valor2)

console.log(`La suma de ${valor1} y ${valor2} es igual a: ${resultado}.`);

console.log("---------------------------------");

let valor3 = 15;
let valor4 = 9;

let resul = (valor3 - valor4)

console.log(`La resta de ${valor3} y ${valor4} es igual a: ${resul}.`);

console.log("---------------------------------");

let edad = prompt("Ingrese su edad ");

if(edad >= 18) {
  console.log("Eres mayor de edad");
} else if(edad < 18) {
  console.log("Eres menor de edad");
}

console.log("---------------------------------");

let numero = prompt("Digite un número ")

if(numero <0) {
  console.log("El número ingresado es negativo");
} else if (numero >= 0) {
  console.log("El numero ingresado es positivo");
}

console.log("---------------------------------");

let num = 1;

while(num <= 10) {
  console.log("Los números son: " + num);

  num++; 
}

console.log("---------------------------------");

let nota = 5;

if(nota >= 7){
  console.log("Aprobado");
}else {
  console.log("Reprobado");
}

console.log("---------------------------------");

aletorio = Math.random()

console.log(aletorio);

console.log("---------------------------------");

alet = Math.floor(Math.random()*10)+1;

console.log(alet);

console.log("---------------------------------");

al = parseInt(Math.random()*1000)+1;

console.log(al);







