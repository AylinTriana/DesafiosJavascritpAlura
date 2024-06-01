
const prompt = require("prompt-sync")({ sigint: true});

let contador = 1; 

while(contador <= 10) {
  console.log("El número es: " + contador);

  contador = contador + 1; 
  // tambien se puede escribir asi para simplificarlo contador ++; y realiza la misma funcion 
  // para sumar de a 2 o mas se puede utilizar contador = contador + 2; o para simplificarlo contador +=2 que realiza la misma funcion (el mas suma 2 y el igual le da a contador el nuevo valor)
  // esto se puede utilizar no solo con valores exactos si no con variables u otros valores. 
}

console.log("---------------------------------");


let contadorResta = 10;

while(contadorResta >= 0) {
  console.log("El número es: " + contadorResta);

  contadorResta--; 
}

console.log("---------------------------------");

let cuentaRegresiva = 0; 
let numeroUsuarioR = prompt("Digite un número ");

while( numeroUsuarioR >= cuentaRegresiva) {
  console.log("Cuenta regresiva " + numeroUsuarioR);

  numeroUsuarioR--;
}

console.log("---------------------------------");

let cuentaProgresiva = 0; 
let numeroUsuario = prompt("Digite un número ");

while(cuentaProgresiva <= numeroUsuario) {
  console.log("Cuenta regresiva " + cuentaProgresiva);

  cuentaProgresiva++;

}
