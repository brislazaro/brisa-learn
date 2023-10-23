/*
    1- Escribe una function que escriba 'Hola mundo' en la consola
    llamala para comprobar que funciona
*/
function printHelloWorld() {
  console.log('Hola Mundo');
}
printHelloWorld();
/*
    2- Escribe una funcion que imprima una receta en la consola
    llamala para comprobar que funciona
*/
function printRecipe() {
  console.log('Paso 1');
  console.log('Paso 2');
  console.log('Paso 3');
}
printRecipe();
/*
    3- Escribe una funcion que reciba un nombre e imprima:
    "Hola me llamo <nombre>"
*/
function printName(name) {
  console.log('Hola me llamo', name);
}
printName('brisa');
/*
    4- Escribe una funcion que reciba 2 numeros e imprima por consola el resultado de la suma
*/
function printNumbers(number1, number2) {
  console.log(number1 + number2);
}
printNumbers(2, 3);

/*
    5- Ahora modificala para que en lugar de hacer el console.log, retorne el resultado.

    Recuerda guardar el valor retornado para poderlo utilizar
*/
function suma(number1, number2) {
  let result = number1 + number2;
  return result;
}

let printSuma = suma(3, 5);
console.log(printSuma);

/*
  6-  Haz una funcion que reciba 2 numeros y retorne el mayor de los 2
*/
function getBiggestNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

let biggestNumber = getBiggestNumber(3, 4);
console.log(biggestNumber);

/* 
  7- Haz una funcion askForNumber que pida un numero al usuario usando prompt, y lo retorne
*/

function askForNumber() {
  let answer = prompt('inserte un numero');
  return answer;
}

let userNumber = askForNumber();
console.log(userNumber);

/*
  8- Haz una funcion convertStringToNumber que reciba un numero como string y lo retorne convertido a Number
*/

function convertStringToNumber(numberAsString) {
  let stringToNumber = Number(numberAsString);
  return stringToNumber;
}
let convertedNumber = convertStringToNumber('7');
console.log(convertedNumber);

/*
  9- Ahora refactoriza la funcion del ex7 para añadir una validación para que si el usuario cancela el prompt, 
  es decir, el valor es null, retorne un string vacio "". Si no es null, tiene que retornar lo que ha introducido el usuario
*/
function askForNumberAndValidate() {
  let answer = prompt('Inserte un numero');
  if (answer === null) {
    return '';
  } else {
    return answer;
  }
}

let userNumber2 = askForNumberAndValidate();
console.log(userNumber2);
/*
  10- Refactoriza la funcion del ex8 para que si el valor que recibe no es un numero, retorne 0.
  En caso contrario, tiene que retornar el numero
*/
function convertStringToNumberAndValidate(numberAsString) {
  let stringToNumber = Number(numberAsString);

  if (isNaN(stringToNumber)) {
    return 0;
  } else {
    return stringToNumber;
  }
}
let convertedNumber2 = convertStringToNumberAndValidate();
console.log(convertedNumber2);

/*
  11- Haz una funcion getNumber que utilice las 2 funciones anteriores para hacer todo el proceso de pedir un numero
  al usuario. y q retorne
*/
function getNumber() {
  let askANumber = askForNumberAndValidate();
  let number = convertStringToNumberAndValidate(askANumber);
  return number;
}

let userNumber3 = getNumber();
let userNumber4 = getNumber();
let userNumber5 = getNumber();
