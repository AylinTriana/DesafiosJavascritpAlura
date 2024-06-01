const prompt = require("prompt-sync")({ sigint: true});

//1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("Bienvenido");

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = "Aylin"; 

console.log(`¡Hola, ${nombre}!` );

// alert(`¡Hola, ${nombre}!` );

console.log("---------------------------------");

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta? ");

console.log(pregunta);

console.log("---------------------------------");

//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 5;
let valor2 = 7;

let resultado = (valor1 + valor2)

console.log(`La suma de ${valor1} y ${valor2} es igual a: ${resultado}.`);

console.log("---------------------------------");

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor3 = 15;
let valor4 = 9;

let resul = (valor3 - valor4)

console.log(`La resta de ${valor3} y ${valor4} es igual a: ${resul}.`);

console.log("---------------------------------");

//7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = prompt("Ingrese su edad ");

if(edad >= 18) {
  console.log("Eres mayor de edad");
} else if(edad < 18) {
  console.log("Eres menor de edad");
}

console.log("---------------------------------");

//8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt("Digite un número ")

if(numero <0) {
  console.log("El número ingresado es negativo");
} else if (numero >= 0) {
  console.log("El numero ingresado es positivo");
}

console.log("---------------------------------");

//9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let num = 1;

while(num <= 10) {
  console.log("Los números son: " + num);

  num++; 
}

console.log("---------------------------------");

//10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 5;

if(nota >= 7){
  console.log("Aprobado");
}else {
  console.log("Reprobado");
}

console.log("---------------------------------");

//11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

aletorio = Math.random()

console.log(aletorio);

console.log("---------------------------------");

//12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

alet = Math.floor(Math.random()*10)+1;

console.log(alet);

console.log("---------------------------------");

//13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

al = parseInt(Math.random()*1000)+1;

console.log(al);







