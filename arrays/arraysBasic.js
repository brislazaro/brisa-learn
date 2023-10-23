/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    
    Los arrays son un tipo de objeto especial.

    Sirven para guardar muchos valores juntos como en una especie de lista.

    Creamos un array de la siguiente forma:
*/

const myArrayName = []; // --> este seria un array vacio.

// Pero los arrays pueden contener valores dentro separados por comas.

const names = ["Brisa", "Gerard", "Max", "Sara"];
//                0         1       2       3

/*
    HACER EJEMPLO EN PIZARRITA
    
    A diferencia de los objetos, no tenemos una propiedad para cada valor, simplemente es una lista con muchas cosas.

    Internamente, JS le asigna una posición a cada valor del array. Empezando por el 0.

    Y podemos acceder a ellas con la sintaxis nombreArray[position]
*/

console.log(names); // Accedemos al array entero

console.log(names[0]); // Accedemos a la posicion 0 del array (la primera)

console.log(names[2]); // Accedemos a la posicion 2 del array (la tercera)

/*
    A esta "posición" se le llama el INDICE (index en ingles).

    Un array tambien puede guardar cualquier tipo de valor.
*/

const studentGrades = [5, 10, 2, 4, 6, 7.6, 1.2, 0, 8];

const booleanValues = [false, true, false, false, true];

/*
    Y aunque no es correcto y no se deberia hacer, tambien pueden mezclar valores de distintos tipos.
*/

const neverDoThisArrays = [
  "brisa",
  10,
  false,
  null,
  undefined,
  "hello",
  23.5,
  -234,
  true,
  {},
  function hola() {},
  {
    name: "Solde",
    age: 29,
  },
];

/*
    Tambien podemos acceder a una posicion de un array de forma dinamica (sin poner 0, 1, 2.... en los [])

    const names = ["Brisa", "Gerard", "Max", "Sara"];
                      0         1       2       3
*/

const desiredPosition = 3;
console.log(names[desiredPosition]); // "Sara"

/*
    Que pasa si intentamos acceder a una posicion del array que no existe?

    Nos va a retornar undefined.
*/
console.log(names[9999]);

/*
    En muchas ocasiones, querremos saber la longitud total de un array. Para eso se usa
    la propiedad .length

    Array.length, devuelve la cantidad de elementos totales del array como numero.
*/

const numbers = [1, 2, 3, 4];
console.log(numbers.length); // --> 4

console.log(numbers[numbers.length]);

/*
    Es importante tener en cuenta, que aunque la primera posicion se la 0, el lenght es 4, ya que contiene 4 elementos.

    En el caso de numbers, la ultima posicion del array es la 3, pero normalmente no sabremos exactamente cuantos elementos hay en un array.

    Para acceder a la ultima posicion de un array, usamos el .lenght, pero siempre le tenemos que restar 1, ya que la ultima posicion es la 3,
    pero el .length nos esta retornando 4.

*/
console.log(numbers[numbers.length - 1]);

// O de esta forma si te resulta mas claro
const lastPosition = numbers.length - 1;
console.log(numbers[lastPosition]);

const brisa = {
  name: "Brisa",
  age: 25,
};

const gerard = {
  name: "Gerard",
  age: 28,
};

const users = [brisa, gerard, { name: "Max", age: 17 }];
/*
    --------------
       EX BASIC
    --------------
*/
