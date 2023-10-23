/* 
    Haz un programa calculadora que:
     - Reciba 2 numeros por parte del usuario usando el metodo prompt.
     - Reciba que operacion desea hacer el usuario (+, -, *, /)
     - Muestre el resultado al usuario.
*/

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
  
    
    - Muestro el numero
*/

let number1 = Number(prompt('Inserte un numero'));
console.log(number1);

let operator = prompt('Inserte operacion (+,-,/,*)');
console.log(operator);

let number2 = Number(prompt('Inserte un numero'));
console.log(number2);

let result;

if (operator === '+') {
  result = number1 + number2;
} else if (operator === '-') {
  result = number1 - number2;
} else if (operator === '*') {
  result = number1 * number2;
} else if (operator === '/') {
  result = number1 / number2;
}

alert(result);
