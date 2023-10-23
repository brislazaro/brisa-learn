/*
    Normalmente las funciones reciben unos valores (parametros) y retornan un valor (aunque no siempre tiene que ser asi).

    Cuando hacemos una función, la haremos pensando en que esta, no modifique variables que estén fuera de la misma función.

    Una función que afecta o modifica cosas fuera de ellas se dice que genera "Efectos Secundarios".

    Contrariamente, una función que no modifica ni afecta a nada fuera de ella se le llama una función pura.

    Nosotros siempre intentaremos que nuestras funciones sean puras, y en caso de que eso no sea possible, que tengan
    los menores efectos secundarios posibles.
*/

// EJEMPLO DE FUNCION PURA

// recibe 2 numeros, calcula un resultado y lo retorna
function addNumbers(num1, num2) {
  return num1 + num2;
}

const number1 = Number(prompt('Introduce num'));
const number2 = Number(prompt('Introduce num 2'));

// En nuestro codigo principal, usamos esa funcion y no afecta a nada de fuera.
// Guardamos lo que devuelve en una variable, pero no modifica ninguna otra.
const result = addNumbers(number1, number2);
console.log('El resultado es:', result);

// EJEMPLO DE FUNCION IMPURA (que tiene efectos secundarios)

let resultado; // Creamos esta variable en el scope global
function modifyResult(number1, number2) {
  resultado = number1 + number2; // modificamos la variable resultado (externa a la funcion) para guardar el resultado
}

const number3 = Number(prompt('Introduce num'));
const number4 = Number(prompt('Introduce num 2'));

modifyResult(number3, number4); // esta funcion esta modificando la variable resultado de la linea 31.

console.log('El resultado es:', resultado);
