/*
    0- Haz una funcion que se encargue de pedir un numero al usuario y validarlo.
    Si el valor es un numero valido, tiene que retornar el numero.
    Sino, tiene que retornar 0.

    NO MIRES LOS EJERCICIOS ANTERIORES
*/

function askANumber() {
  let number = Number(prompt('inserte un numero'));
  if (isNaN(number)) {
    return 0;
  } else {
    return number;
  }
}
let number = askANumber();
console.log(number);
/*
    1- Pide su edad al usuario y asegurate de que el valor introducido es un numero usando la funcion anterior.
    Si el valor es menor que 18 muestra un mensaje diciendo que es menor de edad.
    Si el valor es mayor o igual que 18 muestra un mensaje diciendo que es mayor de edad.
*/
function askAge() {
  let age = askANumber();
  if (age < 18) {
    return 'Eres menor de edad';
  } else if (age >= 18) {
    return 'Eres mayor de edad';
  }
}
let age = askAge();
console.log(age);

/*
    2- Haz lo mismo, pero con estas condiciones.
    Si su edad es menor de 18 muestra un mensaje diciendo que es menor de edad.
    Si su edad esta entre 18 y 64 muestra un mensaje diciendo que es adulto.
    Para el resto de casos, muestra un mensaje diciendo que está en la tercera edad.

    Pista: Puedes usar el operador && para comprobar que un numero esta entre 2 valores.
*/
function askAge2() {
  let age = askANumber();
  if (age < 18) {
    return 'Eres menor de edad';
  } else if (age > 17 && age < 65) {
    return 'Eres adulto';
  } else if (age >= 65) {
    return 'Estas en la tercera edad';
  }
}
let ages = askAge2();
console.log(ages);
/*
    3- Ejercicio en 2 partes 
    Parte 1: Crea 3 funciones.
      - isYoungerThan18 --> recibe un num, y si es menor a 18 retorna true, sino false
      - isAdult --> recibe un num, si esta entre 18 (incluido) y 34 retorna true, sino false
      - isBigAdult --> recibe un num, si esta entre 35 (incluido) y 64 retorna true, sino false

    Parte 2: Haz un codigo principal (en el scope global) que:
    - Pida un numero al usuario
    - Si su edad es menor de 18 muestra un mensaje diciendo que es menor de edad.
    - Si su edad esta entre 18 y 34 muestra un mensaje diciendo que es adulto.
    - Si su edad esta entre 35 y 64 muestra un mensaje diciendo que es un adulto mayor
    - Para el resto de casos, muestra un mensaje diciendo que está en la tercera edad.

    Recuerda usar tus funciones creadas en la primera parte para comprobar los rangos de edad.
*/

function isYoungerThan18(age) {
  if (age < 18) {
    return true;
  } else {
    return false;
  }
}
function isAdult(age) {
  if (age >= 18 && age < 35) {
    return true;
  } else {
    return false;
  }
}
function isBigAdult(age) {
  if (age >= 35 && age <= 65) {
    return true;
  } else {
    return false;
  }
}
function isGrandPa(age) {
  if (age >= 65) {
    return true;
  } else {
    return false;
  }
}

const userAge = 34;
if (isYoungerThan18(userAge)) {
  console.log('Eres menor de edad');
} else if (isAdult(userAge)) {
  console.log('Eres un adulto');
} else if (isBigAdult(userAge)) {
  console.log('Eres adulto mayor');
} else {
  console.log('Eres de la tercera edad');
}

/*
    4- Pide 2 numeros al usuario (recuerda usar tu funcion para eso).
    Comprueba cual de los 2 numeros es el mayor y muestra un mensaje diciendo cual es el mayor de los 2.
    Usa este formato:

    Output: El numero 10 es mayor que el numero 5.

    Pista: Puedes usar template literals `` para escribir el mensaje de forma más comoda.
    Ej: `Mi nombre es: ${name} y tengo ${age} años` --> Mi nombre es: Brisa y tengo 25 años
*/
function biggerNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}
function smallestNumber(number1, number2) {
  if (number1 < number2) {
    return number2;
  } else {
    return number1;
  }
}
let bigNumber = biggerNumber(3, 6);
let smallnumber = smallestNumber(3, 6);

console.log(`El numero ${bigNumber} es mayor que el numero ${smallNumber}`);

/*
    Solucion alternativa

    let n1 = askANumber();
    let n2 = askANumber();

    if (n1 > n2) {
    console.log(`${n1} > ${n2}`);
    } else {
    console.log(`${n2} > ${n1}`);
    }

*/
