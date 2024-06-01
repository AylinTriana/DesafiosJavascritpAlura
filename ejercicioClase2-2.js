//1.Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo() { 
  return 'Hola Mundo';
}

let sal = saludo();
console.log(sal);

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function recibirNombre(nombre) {
  return `¡Hola ${nombre}!`;
}

console.log(recibirNombre('Aylin'));

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function num(numero) {
  return numero+numero;
}

console.log(num(9));

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.

function recibirNumeros(num1, num2, num3) {
  return ((num1+num2+num3)/3);
}

console.log(recibirNumeros(3,9,7));

//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(n1,n2) {
  return n1 > n2 ? n1 : n2; 
}

console.log(numeroMayor(15,9));

//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function mult(numer) {
  return numer*numer;
}

console.log(mult(10));