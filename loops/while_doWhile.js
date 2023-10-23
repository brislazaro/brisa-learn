/*
    While loop es otro tipo de bucle, que se ejecuta mientras la condicion sea verdadera.
*/

let user = 'jkshdkashdka';

while (user !== '') {
  user = user.slice(0, -1);
  console.log('vuelta del while', user);
}

console.log(user);

const numbers = [1, 5, 6, 63, 5, 2, 1];

/*
    El while lo solemos utilizar en casos en los que no sabemos exactamente cuantas veces tendremos que repetir un proceso.

    Ej: Pedirle al usuario que introduzca algo. Mientras no sea valido, sigue pidiendo lo mismo
*/

let operator = prompt('Introduce un operador (+, -, *, /)');

while (
  operator !== '+' &&
  operator !== '-' &&
  operator !== '*' &&
  operator !== '/'
) {
  operator = prompt('Este operador no es valido, introduce + - * /');
}

console.log('El operador es valido:', operator);

/*
    El do - while es lo mismo, pero se asegura de que se ejecute el codigo al menos 1 vez.

    Primero hace el codigo, y despues pregunta la condicion del while
*/

let number;
let parsedNumber;

do {
  number = prompt('Introduce un numero');
  parsedNumber = Number(number);
} while (isNaN(parsedNumber) === true);

// Lo mismo pero con el while
let numberWithWhile = prompt('Introduce un numero');
let parsedNumberWithWhile = Number(numberWithWhile);

console.log(parsedNumberWithWhile);

while (isNaN(parsedNumberWithWhile) === true) {
  numberWithWhile = prompt('Esto no es un num, introduce el num');
  parsedNumberWithWhile = Number(numberWithWhile);
}
