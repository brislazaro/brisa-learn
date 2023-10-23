/*
    1- Dado un array de animales, imprime por consola cada una de sus animales usando el FOR
*/

const animalsEx1 = ['jirafa', 'perro', 'gato', 'tortuga', 'cerdo', 'elefante'];

for (let i = 0; i < animalsEx1.length; i++) {
  const element = animalsEx1[i];
  console.log(element);
}
/*
    2- Dado un array de precios, calcula la suma total de estos
*/

const pricesEx2 = [
  5, 2.5, 29, 49, 4, 10, 19, 45, 32, 11, 56, 88, 43, 123, 55, 89, 23, 56,
];

let finalPrice = 0;

for (let i = 0; i < pricesEx2.length; i++) {
  const element = pricesEx2[i];

  finalPrice = finalPrice + element;
}

console.log(`el precio final es ${finalPrice}`);
/*()
    3- Con la siguiente palabra, imprime cada una de las letras por separado:
*/

const userNameEx3 = 'Brisa Lazaro';
for (let i = 0; i < userNameEx3.length; i++) {
  const element = userNameEx3[i];
  console.log(element);
}

/*
    4- Usando la misma variable del ex3,
    imprime unicamente las letras que sean una 'a'
*/
const lettertoFind = 'a';
for (let i = 0; i < userNameEx3.length; i++) {
  const element = userNameEx3[i];
  if (element === lettertoFind) {
    console.log(element);
  }
}
/*
    5- Usando la misma variable del ex3, 
    calcula cuantas letras 'a' tiene y muestra el resultado por pantalla
*/
let letterA = 0;
for (let i = 0; i < userNameEx3.length; i++) {
  const element = userNameEx3[i];
  if (element === lettertoFind) {
    letterA = letterA + 1;
  }
}
console.log(letterA);

/*
    6- Usando la misma variable del ex3
    calcula cuantas vocales tiene y muestra el resultado por pantalla
*/
const vocalA = 'a';
const vocalE = 'e';
const vocalI = 'i';
const vocalO = 'o';
const vocalU = 'u';

let totalVocals = 0;

for (let i = 0; i < userNameEx3.length; i++) {
  const element = userNameEx3[i];

  if (
    element === vocalA ||
    element === vocalE ||
    element === vocalI ||
    element === vocalO ||
    element === vocalU
  ) {
    totalVocals = totalVocals + 1;
  }
}

console.log('ex6', totalVocals);
/*
    7- dada la variable textEx7, cuenta cuantas palabras tiene.

    Pista: Puedes recorrer el string. Que separa una palabra de otra?
*/

const textEx7 = 'Tienes que contar cuantas palabras tiene este string'; // son 8

const space = ' ';
let totalWords = 0;
for (let i = 0; i < textEx7.length; i++) {
  const element = textEx7[i];
  if (element === space || i === textEx7.length - 1) {
    totalWords = totalWords + 1;
  }
}
console.log('ex7', totalWords);
/*
    8- Dado este carrito de la compra del Shein. Calcula el precio final y muestralo por pantalla
*/

const sheinCartEx8 = [
  {
    item: 'dress',
    price: 20,
  },
  {
    item: 'shirt',
    price: 10,
  },
  {
    item: 'pants',
    price: 15,
  },
  {
    item: 'shoes',
    price: 30,
  },
  {
    item: 'socks',
    price: 5,
  },
  {
    item: 'jacket',
    price: 50,
  },
];

let totalShein = 0;

for (let i = 0; i < sheinCartEx8.length; i++) {
  const element = sheinCartEx8[i];
  totalShein = totalShein + element.price;
}

console.log('ex8', totalShein);
/*
    9- Con el mismo carrito sheinCartEx8, calcula el precio medio de los productos y muestralo
*/
console.log('ex9', totalShein / sheinCartEx8.length);
/*
    10- Con el mismo carrito sheinCartEx8, comprueba si el carrito tiene el producto 'shoes'.
    Si es asi, tienes que imprimir: Hay zapatos en el carrito.
    Si no, tienes que imprimir: No hay
*/
let itemToFind = 'shoes';
let isShoesInTheCart = false;

for (let i = 0; i < sheinCartEx8.length; i++) {
  const element = sheinCartEx8[i];

  if (element.item === itemToFind) {
    isShoesInTheCart = true;
  }
}

if (isShoesInTheCart === true) {
  console.log('Hay zapatos');
} else {
  console.log('no hay zapatos');
}
/*
    11- Con el mismo carrito sheinCartEx8, comprueba si el carrito tiene algun producto con un precio mayor a 40.
    Si es asi, tienes que imprimir: Hay productos caros en el carrito.
    Si no, tienes que imprimir: Son todos baratos.
*/
let highPrice = 400;
let isThePriceBiggerThan40 = false;
for (let i = 0; i < sheinCartEx8.length; i++) {
  const element = sheinCartEx8[i];
  if (element.price >= highPrice) {
    isThePriceBiggerThan40 = true;
  }
}
if (isThePriceBiggerThan40 === true) {
  console.log('Hay productos caros en el carrito');
} else {
  console.log('Son todos baratos');
}
/*
    12- Dado el array wordsEx12, crea un nuevo array (longWordsEx12). Y añadele las palabras que tengan mas de 8 letras.

    Pista: Para añadir un elemento a un array, puedes usar el metodo push()
*/

const wordsEx12 = [
  'environment', // si
  'language', // si
  'sister', // no
  'chemistry', // si
  'people', // no
  'world', // no
  'week', // no
  'technology', // si
  'software', // si
];

let longWordsEx12 = [];
let eigthLetters = 8;

for (let i = 0; i < wordsEx12.length; i++) {
  const element = wordsEx12[i];

  if (element.length >= eigthLetters) {
    longWordsEx12.push(element);
  }
}

console.log(longWordsEx12);

// Ejemplo de un for que agarra elementos de 2 arrays distintos
let students = ['Brisa', 'gerard', 'sara', 'max'];
let studentsGrade = [9, 4, 2, 8];

for (let i = 0; i < students.length; i++) {
  let currentStudent = students[i];
  let studentGrade = studentsGrade[i];

  console.log(`Estudiante ${currentStudent} tiene la nota ${studentGrade}`);
}
