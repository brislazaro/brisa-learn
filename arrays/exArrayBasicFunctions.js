/*
    ex1
    1- Crea un array vacío llamado "frutas".
    2- Agrega las siguientes frutas al array "frutas" utilizando el método .push(): "manzana", "banana", "naranja".
    3- Imprime el array "frutas" después de agregar las frutas.
*/
let frutas = [];
frutas.push('manzana', 'banana', 'naranja');
console.log(frutas);
/*
    ex2
    1- Dado el siguiente array de números: [1, 2, 3, 4, 5]. ex2Numbers
    2- Usa el método .pop() para eliminar el último elemento del array.
    3- Imprime el array después de eliminar el último elemento.
    4- Usa el método .shift() para eliminar el primer elemento del array.
    5- Imprime el array después de eliminar el primer elemento.
*/
let ex2Numbers = [1, 2, 3, 4, 5];
ex2Numbers.pop();
console.log(ex2Numbers);
ex2Numbers.shift();
console.log(ex2Numbers);
/*
    ex3
    1- Dado el siguiente array de nombres: ["Alicia", "Bob", "Charlie", "Alicia", "David"].
    2- Usa el método .indexOf() para encontrar el índice de la primera aparición de "Alicia" en el array.
    3- Imprime el índice.
    4- Usa el método .lastIndexOf() para encontrar el índice de la última aparición de "Alicia" en el array.
    5- Imprime el índice.
    6- Usa el método .includes() para verificar si el array contiene "Charlie".
    7- Imprime el resultado del includes.
*/
let names = ['alicia', 'bob', 'charlie', 'alicia', 'david'];
let aliciaIndex = names.indexOf('alicia');
console.log(aliciaIndex);
let aliciaLastIndex = names.lastIndexOf('alicia');
console.log(aliciaLastIndex);
let isCharlieInclued = names.includes('charlie');
console.log(isCharlieInclued);
/*
    ex4
    1- Dado el siguiente array de números: [9, 2, 7, 4, 5].
    2- Usa el método .sort() para ordenar los números en orden ascendente.
    3- Imprime el array ordenado.
    4- Usa el método .reverse() para invertir el orden del array.
    5- Imprime el array invertido.

    Nota: Esto es una forma de ordenar un array de mas grande a mas pequeño
*/
let ex4Numbers = [9, 2, 7, 4, 5];
ex4Numbers.sort();
console.log(ex4Numbers);
ex4Numbers.reverse();
console.log(ex4Numbers);
/*
    ex5
    1- Dado el siguiente array de nombres: ["Alicia", "Bob", "Charlie", "Alicia", "David"].
    2- Usa el método .sort() para ordenar los nombres alfabéticamente.
    3- Imprime el array ordenado.
    4- Usa el método .reverse() para invertir el orden del array.
    5- Imprime el array invertido.

    Nota: Esto ordena el array de la Z a la A
*/
names.sort();
console.log(names);
names.reverse();
console.log(names);
/*
    ex6
    1- Dados dos arrays: ["a", "b"] y ["c", "d"].
    2- Usa el método .concat() para concatenar (juntar) los dos arrays.
    3- Imprime el array concatenado.
*/
let letters = ['a', 'b'];
let letters2 = ['c', 'd'];
let allLetters = letters.concat(letters2);
console.log(allLetters);

/*
    ex7
    1- Dado el siguiente array de números desordenados: [9, 2, 7, 4, 5].
    2- Crea un array adicional con los siguientes números: [6, 8].
    3- Combina ambos arrays utilizando el método .concat().
    4- Ordena el array combinado utilizando el método .sort().
    5- Usa el método .includes() para verificar si el array ordenado contiene el número 7.
    6- Usa el método .indexOf() para encontrar el índice de la primera aparición del número 5 en el array ordenado.
    7- Imprime el indice en la consola.
*/
let ex7Numbers = [9, 2, 7, 4, 5];
let ex7Numbers2 = [6, 8];
let allNumbers = ex7Numbers.concat(ex7Numbers2);
console.log(allNumbers);
const sortedNumbers = allNumbers.sort();
console.log(sortedNumbers);
const includes7 = allNumbers.includes(7);
console.log(includes7);
const indexOf5 = allNumbers.indexOf(5);
console.log(indexOf5);

/*
    ex8
    /*
    1- Dado el siguiente array de nombres: ["Sofía", "Diego", "Lucía", "Miguel"].
    2- Usa el método .includes() para verificar si el array contiene el nombre "Lucía".
    3- Usa el método .indexOf() para encontrar el índice de la primera aparición del nombre "Diego".
    4- Crea un segundo array con los siguientes nombres: ["Pedro", "Sofía", "Elena"].
    5- Combina ambos arrays utilizando el método .concat().
    6- Ordena el array combinado en orden alfabético utilizando el método .sort().
    7- Si el array combinado NO incluye el nombre "Gerard", agregaselo
    8- Imprime el array por por pantalla.
*/
let ex8Names = ['sofia', 'diego', 'lucia', 'miguel'];
const isLuciaIncluded = ex8Names.includes('lucia');
console.log(isLuciaIncluded);
const indexDiego = ex8Names.indexOf('diego');
console.log(indexDiego);
let ex8Names2 = ['pedro', 'sofia', 'elena'];
const allNames = ex8Names.concat(ex8Names2);
console.log(allNames);
const sortedNames = allNames.sort();
console.log(sortedNames);
if (sortedNames.includes('gerard') === false) {
  sortedNames.push('gerard');
}
console.log(sortedNames);

/*
    ex9
    1- Crea una función llamada ex9GetAverage que reciba un array de estudiantes (siempre tendra 3 estudiantes)
        y devuelva el promedio de sus notas.
        Los estudiantes tienen las propiedades: name y nota
    1- Crea un array de objetos llamado ex9Students con 3 estudiantes.
    4- Imprime el promedio de notas de los estudiantes en la consola (des de fuera de la funcion).
    5- Si el promedio de notas es mayor a 7, imprime "Muy bien!" en la consola.
    6- Si el promedio de notas es menor a 7, imprime "Hay que estudiar más!" en la consola.
*/
function ex9IsAverageBiggerThan7(grade) {
  if (grade > 7) {
    return 'true';
  } else {
    return 'false';
  }
}

let students = [
  {
    student: 'maria',
    grade: 8,
  },
  {
    student: 'sofia',
    grade: 8,
  },
  {
    student: 'alicia',
    grade: 9,
  },
];
let grade = (students[0].grade + students[1].grade + students[2].grade) / 3;

let studentsAverage = ex9IsAverageBiggerThan7(grade);

if (studentsAverage === 'true') {
  console.log('muy bien');
} else {
  console.log('estudia mas');
}
/*
    ex10
    1- Crea un array vacio llamado ex10Animals1.
    2- Crea otro array con 3 animales (ex10Animals2): "perro", "gato", "conejo".
    3- Junta los 2 arrays en un nuevo array llamado ex10AllAnimals
    4- Añade 2 animales más al array ex10AllAnimals: "loro", "tortuga".
    5- Busca el indice de "gato"
    6- Si encuentra ese elemento, imprime 'Meow' en la consola.
    7- Si no encuentra ese elemento, imprime 'No existe' en la consola.
*/
let ex10Animals1 = [];
let ex10Animals2 = ['perro', 'gato', 'conejo'];
let allAnimals = ex10Animals1.concat(ex10Animals2);

allAnimals.push('loro', 'tortuga');

let isCatIncluded = allAnimals.includes('gato');

if (isCatIncluded === true) {
  console.log('Meow');
} else {
  console.log('no existe');
}

/*
    ex11
    1- Dado este array de animales (ex11Animals): ["perro", "gato", "conejo", "loro", "tortuga"].
    2- Busca el indice de "conejo"
    3- Si existe ese elemento haz lo siguiente:
        3.1- Si la longitud de "conejo" es mayor o igual que 4, imprime 'Es un string largo' en la consola.
        3.2- Si la longitud de "conejo" es menor que 4, imprime 'Es un string corto' en la consola.
    4- Si no existe ese elemento, imprime 'no existe' en la consola.

    Pista: los string tambien tienen la propiedad .length
*/

let ex11Animals = ['perro', 'conejo', 'gato', 'loro', 'tortuga'];
let indexConejo = ex11Animals.indexOf('conejo');
if (indexConejo !== -1) {
  if (ex11Animals[indexConejo].length >= 4) {
    console.log('es un string largo');
  } else {
    console.log('Es un string corto');
  }
} else {
  console.log('No existe');
}

/*
    ex12 (hacer juntos)
    
    2- Haz una funcion llamada getIsStringLongOrShort que reciba un array y un termino a buscar (un string).
        El array, sera el array donde tiene que buscar
        El termino, sera el valor que tiene que buscar
    3- La funcion debe buscar el valor en el array 
        3.1- Si existe ese elemento haz lo siguiente:
            3.1.1- Si la longitud del elemento es mayor o igual que 4, retorna 'largo'
            3.1.2- Si la longitud del elemento es menor que 4, retorna 'corto'
        3.2- Si no existe ese elemento, retorna 'No existe'
    
    1- Dado este array de animales (ex12Animals): ["perro", "gato", "conejo", "loro", "tortuga"].
    4- Llama la funcion que has creado pasandole el array de animales y el valor "elefante".
    5- Si la funcion nos devuelve "no existe", tenemos que imprimir en la consola: "este animal no existe"
    6- Si la funcion nos devuelve "largo", tenemos que imprimir en la consola: "este animal es largo"
    7- Si la funcion nos devuelve "corto", tenemos que imprimir en la consola: "este animal es corto"
*/

console.log('--------------');

function getIsStringLongOrShort(animals, animalToFind) {
  let isAnimalIncluded = animals.includes(animalToFind);

  if (isAnimalIncluded === true) {
    if (animalToFind.length >= 4) {
      return 'largo';
    } else {
      return 'corto';
    }
  } else {
    return 'No existe';
  }
}

let animalsList = ['perro', 'gato', 'conejo', 'loro', 'tortuga', 'pez'];
let userAnimal = 'elefante';

let animalResult = getIsStringLongOrShort(animalsList, userAnimal);

if (animalResult === 'largo') {
  console.log('este animal es largo');
} else if (animalResult === 'corto') {
  console.log('Este animal es corto');
} else {
  console.log('Este animal no existe');
}

/*
    ex13
    Crea una funcion que reciba un numero (sera un año) y devuelva true si es anterior al 1950 o false si es posterior al 1950.
    (usa un nombre de funcion que se entienda facilmente que hace, si devuelve true o false acuerdate de la convencion is____)

    Basandote en el arra de libros ex13Books:
    Crea un nuevo array vacio llamado oldBooks.
    Crea un nuevo array vacio llamado newBooks.

    Por cada libro del array ex13Books, 
        si el año del libro es anterior al 1950, añade el libro al array oldBooks
        si el año del libro es posterior al 1950, añade el libro al array newBooks
    
    Imprime los 2 arrays por consola.
    
*/

const ex13Books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
];

function isBookOlderThan1950(year) {
  if (year < 1950) {
    return true;
  } else {
    return false;
  }
}

let oldBooks = [];
let newBooks = [];

const books = ex13Books[1];

if (isBookOlderThan1950(books.year)) {
  oldBooks.push(books);
} else {
  newBooks.push(books);
}
