/*
    Podemos añadir nuevos valores a un array usando el metodo .push()

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/

const names = ["brisa", "gerard"];

names.push("max"); // names --> ["brisa", "gerard", "max"]

names.push("sara", "papa", "mama"); // names --> ["brisa", "gerard", "max", "sara", "papa", "mama"]

/*
    Podemos eliminar valores de un array usando el metodo .pop()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

    El metodo .pop() elimina el ULTIMO valor del array.

*/

names.pop(); // names --> ["brisa", "gerard", "max", "sara", "papa"]
names.pop(); // names --> ["brisa", "gerard", "max", "sara"]
names.pop(); // names --> ["brisa", "gerard", "max"]

/*
    Al contrario que el pop, tenemos el metodo .shift() que elimina el PRIMER valor del array
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
*/

names.shift(); // names --> ["gerard", "max"]

// ------- METODOS UTILES PARA ARRAYS --------

/*
    -- indexOf --
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    indexOf nos sirve para buscar en que indice (posicion) esta un valor dentro de un array
    .indexOf(valor) nos devuelve la posicion de un valor dentro de un array. Si no lo encuentra, devuelve -1

    IMPORTANTE: Si hay algun valor repetido, nos va a devolver el PRIMERO que encuentre
*/

const otherNames = ["brisa", "gerard", "max", "sara"];

const indexOfMax = otherNames.indexOf("max"); // indexOfMax --> 2

/*
    -- lastIndexOf -- (lo mismo que indexOf pero encuentra el ultimo que se repita)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

    lastIndexOf nos sirve para buscar en que indice (posicion) esta un valor dentro de un array

    IMPORTANTE: Si hay algun valor repetido, nos va a devolver el ULTIMO que encuentre
*/

const arrayWithRepeatedValues = ["brisa", "gerard", "max", "sara", "max"]; // se repite max
const lastIndexOfMax = arrayWithRepeatedValues.lastIndexOf("max"); // lastIndexOfMax --> 4

/*
    -- includes --
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

    includes nos sirve para saber si un valor esta dentro de un array o no
    .includes(valor) nos devuelve true o false
*/

const includesMax = arrayWithRepeatedValues.includes("max"); // includesMax --> true
const includesPapa = arrayWithRepeatedValues.includes("papa"); // includesPapa --> false

/*
    -- sort --
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    sort nos sirve para ordenar un array
    .sort() retorna un nuevo array con los valores ordenados (MODIFICANDO el array original)
*/

const numbers = [5, 2, 7, 1, 3, 9, 4, 6, 8];
const sortedNumbers = numbers.sort(); // sortedNumbers --> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Si lo usamos con strings, los ordenara alfabeticamente
const unalphabeticalNames = ["max", "brisa", "sara", "gerard"];
const sortedNames = unalphabeticalNames.sort(); // sortedNames --> ["brisa", "gerard", "max", "sara"]

/*
    -- reverse --
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

    reverse nos sirve para invertir el orden de un array
    reverse, nos retorna un nuevo array con los valores invertidos (MODIFICANDO el original)
*/

const reversedNumbers = numbers.reverse(); // reversedNumbers --> [8, 6, 4, 9, 3, 1, 7, 2, 5]

/*
    -- concat --
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    concat nos sirve para concatenar arrays (juntar arrays)
    concat, nos retorna un nuevo array con los valores concatenados (no modifica los arrays originales)
*/

const names1 = ["brisa", "gerard"];
const names2 = ["max", "sara"];
const allNames = names1.concat(names2); // allNames --> ["brisa", "gerard", "max", "sara"]

const allNamesWithAnotherOrder = names2.concat(names1); // allNamesWithAnotherOrder --> ["max", "sara", "brisa", "gerard"]
