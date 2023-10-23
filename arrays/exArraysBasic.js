/*
   1- Crea un array para guardar los nombres de tus padres y hermanos
*/
let familyNames = ['Paco', 'Sara', 'Sarai', 'Max'];
/*
    2- Imprime la primera posicion del array por consola
*/
console.log(familyNames[0]);
/*
    3- Imprime la segunda posicion del array
*/
console.log(familyNames[1]);
/*
    4- Imprime la ultima posicion del array.

    Pista: puedes usar names.length
*/

console.log(familyNames[familyNames.length - 1]);
/*
    5- Crea otro array con los numeros del 1 al 6
*/
const numbers = [1, 2, 3, 4, 5, 6];
/*
    6- Imprime la primera posicion del array
*/
console.log(numbers[0]);
/*
    7- Imprime la ultima posicion del array
*/
console.log(numbers[numbers.length - 1]);
/*
    8- Imprime el numero 1 de dentro del array.

    Pista: Recuerda que el numero 1 no tiene porque ser la posicion 1
*/
console.log(numbers[0]);
/*
    9- Imprime ahora el numero 4 de dentro del array
*/
console.log(numbers[3]);
/*
    10- Adivina que imprimira el siguiente codigo
    console.log(numbers[999]) // --> undefined
*/

/*
    11- Dado el siguiente array, calcula la media de sus numeros

    Pista: para calcular la media, hay que sumar todos los numeros y dividirlos por el total de numeros que hay
    ejemplo: (5 + 1 + 3) / 3

    Puedes crear tantas variables como consideres, pero no puedes usar los valores "hardcodeados" (5 directamente)
    Tienes que acceder a las posiciones del array para acceder a los valores, usando la sintaxis numbersToBeAveraged[1] por ejemplo
*/

const numbersToBeAveraged = [5, 2, 7];

console.log(
  (numbersToBeAveraged[0] + numbersToBeAveraged[1] + numbersToBeAveraged[2]) /
    numbersToBeAveraged.length
);
/*
    12- Sobre el primer array de nombres que tenias, modifica la primera posicion y cambia el nombre por el apellido.

    Pista: Puedes cambiar el valor de una posicion como si fuera una variable cualquiera o una propiedad de un objeto
    reasignandole el valor como siempre (usando el operador de asignacion =)
*/
familyNames[0] = 'Lazaro';
console.log(familyNames[0]);

/*
    13- Ahora crea 4 objetos:
        - student1 con las propiedades:
           name: 'Brisa'
           grade: 8

        - student2:
            name: 'Gerard'
            grade: 3

        - student3:
            name: 'Max'
            grade: 9
        
        - student4:
            name: 'Sara'
            grade: 6

    Crea un array students que tenga dentro los objetos anteriores.
*/
let student1 = {
  name: 'Brisa',
  grade: 8,
};

let student2 = {
  name: 'Gerard',
  grade: 3,
};

let student3 = {
  name: 'Max',
  grade: 9,
};

let student4 = {
  name: 'Sara',
  grade: 6,
};

let students = [student1, student2, student3, student4];

/*
    14- Imprime por pantalla el objeto del student Max
*/
console.log(students[2]);
/*
    15- Imprime por pantalla la propiedad grade de Brisa
*/
console.log(students[0].grade);
/*
    16- Calcula la media de las notas de los estudiantes y muestrala por pantalla en el formato:
    
    'La nota media de la clase es: <media>'

    Usa la sintaxis de template literals `un texto con una ${variable} y mas texto`
*/
let media =
  (students[0].grade +
    students[1].grade +
    students[2].grade +
    students[3].grade) /
  students.length;
console.log(`La nota media de la clase es: ${media}`);
/*
    17- Genera un string con este formato (usando las posiciones del array) e imprimelo por pantalla:

    'Brisa tiene una nota de 8'
*/
console.log(`${students[0].name} tiene una nota de ${students[0].grade}`);
/*
    18- Usa el array de estudiantes para generar un string con este formato:

    `La clase tiene los estudiantes: Brisa con nota 8, Gerard con nota, ... , y la nota media de la clase es __`
*/
console.log(
  `La clase tiene los estudiantes:
  ${students[0].name} con una nota de ${students[0].grade},
  ${students[1].name} con una nota de ${students[1].grade},
  ${students[2].name} con una nota de ${students[2].grade},
  ${students[3].name} con una nota de ${students[3].grade}
  y la nota media de la clase es ${media}`
);
