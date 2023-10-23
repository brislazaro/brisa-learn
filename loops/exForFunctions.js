/*
    1- Escribe una funcion que reciba un array e imprima cada una de sus posiciones en el siguiente formato:

    "La posicion 0 es: ____"
    "La posicion 1 es: ____"
    "La posicion 2 es: ____"
    ...
*/

function printArray(animals) {
  for (let i = 0; i < animals.length; i++) {
    const element = animals[i];

    console.log(`La posicion ${i} es: ${element}`);
  }
}

let listAnimals = ['vaca', 'toro', 'gallina', 'caballo', 'cabra'];
printArray(listAnimals);

// Llama a la funcion para saber si funciona

/*
    2- Escribe una funcion que reciba un array de numeros y retorne la suma de todos los numeros del array.
    Recuerda darle un nombre a la funcion que indique que es lo que hace. 
*/
function getNumers(numbers) {
  let suma = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    suma = suma + element;
  }
  return suma;
}

let numbersList = [1, 4, 5, 7, 4];
console.log('2-', getNumers(numbersList));

/*
    3- Escribe una funcion que reciba un array de numeros y retorne el promedio de todos los numeros del array.
*/
function promedio(numbers) {
  let sumatory = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sumatory = sumatory + element;
  }

  const average = sumatory / numbers.length;

  return average;
}

let userNumbers = [5, 5, 5];
const calculatedAverage = promedio(userNumbers);
console.log(calculatedAverage);

/*
    4- Escribe una funcion que reciba un array de numeros y retorne el numero mas grande del array.
*/
function theBiggestNumbers(numbers) {
  let biggerNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element > biggerNumber) {
      biggerNumber = element;
    }
  }

  return biggerNumber;
}

let userNumbers2 = [6, 8, 9];
let result2 = theBiggestNumbers(userNumbers2);

console.log(`ex4 ${result2}`);

/*
    5- Escribe una funcion que reciba un array de numeros y retorne el numero mas pequeño del array.
*/

function getSmallerNumber(numbers) {
  let smallerNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element < smallerNumber) {
      smallerNumber = element;
    }
  }

  return smallerNumber;
}

let userNumbers3 = [3, 9, -20];
let result3 = getSmallerNumber(userNumbers3);
console.log(`ex5 ${result3}`);
/*
    6- Escribe una funcion que reciba un array de numeros y retorne otro array con el numero mas pequeño y el mas grande del array.

    En la primera posicion del array ira el prqueño y en la segunda posicion ira el grande.

    Ejemplo:
    [1, 2, 3, 4, 5] => [1, 5]

*/
function bigAndSmallNumber(numbers) {
  let bigNumber = numbers[0];
  let smallNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element > bigNumber) {
      bigNumber = element;
    }

    if (element < smallNumber) {
      smallNumber = element;
    }
  }

  return [smallNumber, bigNumber];
}

let userNumbers4 = [2, 5, -10];
let result4 = bigAndSmallNumber(userNumbers4);
console.log(result4);

/*
    7- Escribe una funcion que replique el comportamiento del metodo indexOf de los arrays

    indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    La funcion tiene que recibir 2 parametros:
    - El primer parametro es el array en el que buscar
    - El segundo parametro es el elemento que buscar en el array

    La funcion tiene que retornar el indice en el que se encuentra el elemento. O -1 si no se encuentra.
*/
function getIndex(list, name) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (element === name) {
      return i;
    }
  }

  return -1;
}

let list = ['brisa', 'gerard', 'sara'];
let resultname = getIndex(list, 'brisa');

console.log(resultname);
/*
    8- Escribe una funcion que replique el comportamiento del metodo includes de los arrays

    includes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

    La funcion tiene que recibir 2 parametros:
    - El primer parametro es el array en el que buscar
    - El segundo parametro es el elemento que buscar en el array
*/
function includes(elementToFind, list) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (element === elementToFind) {
      return true;
    }
  }
  return false;
}
let includesList = [1, 2, 3, 4];
let includesElementToFind = 10;
let includesResult = includes(includesElementToFind, includesList);
console.log(includesResult);

/*
    9- Escribe una funcion que replique el comportamiento del metodo push de los arrays

    push: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

    La funcion tiene que recibir 2 parametros:
    - El primer parametro es el array en el que tiene que añadir el elemento
    - El segundo parametro es el elemento que quiere añadir al array

    Pista: Si accedemos a una posicion que no existe de un array, le podemos asignar un valor y el array se expandira.

    Ejemplo:
    const array = [1, 2, 3];
    array[10] = 11;
    console.log(array); // [1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 11]
*/
function addNewElement(elemtList, newElement) {
  elemtList[elemtList.length] = newElement;

  return elemtList.length;
}

function addNewElementWithoutModifying(elementList, newElement) {
  const newArray = [];

  for (let i = 0; i < elementList.length; i++) {
    const element = elementList[i];

    newArray[newArray.length] = element;
  }

  newArray[newArray.length] = newElement;

  return newArray;
}

let numberList = [1, 2, 3, 4];
let element = 15;
let resultNewElement = addNewElement(numberList, element);

console.log('ex9', resultNewElement);
console.log('ex9', numberList);

/*
    10- Escribe una funcion que replique el comportamiento del metodo concat de los arays

    concat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    Que parametros necesita la funcion para funcionar?
*/
function mergeArrays(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    newArray[newArray.length] = element;
  }

  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    newArray[newArray.length] = element;
  }

  return newArray;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let twoArraysResult = mergeArrays(array1, array2);

console.log(twoArraysResult);
