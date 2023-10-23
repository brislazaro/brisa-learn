/*
    IF - ELSE

    El If, tiene una contrapartida que es el Else.

    Else se ejecutara si la condicion del if no se cumple (es false)
    
    if (condition) {
        // si es TRUE
    } else {
        // si es FALSE
    }
*/

const userAge = 10;

if (userAge >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor, no tienes acceso');
}

const number1 = prompt('Introduce el valor');
const number2 = prompt('Introduce el num 2');

const result = number1 + number2;
console.log(result);

/*
    - Inicio
    - Pedir number1
    - Convertir number1 a numero
    - Pedir operator
    - Pedir number2
    - Convertir number2 a number


    - Si operator es +
        - Hago la suma
    - Si operator es -
        - Hago la resta
    - Si operator es *
        - Hago mult
    - Si operator es /
        - Hago division
    
    - Si el resultado % 1 es 0
        - No hago nada
    - Si no
        - Covierto el numero para que solo tenga 3 decimales
    
    - Muestro el numero
*/
