/*
    1- Pide en que idioma quiere la App el usuario.

    Si introduce "es" para español, muestra el mensaje: "Hola mundo"
    Si introduce "en" para ingles, muestra el mensaje: "Hello world"
    Para cualquier otro valor introducido, muestra el mensaje: "No es un idioma valido"
*/
let idiom = prompt('Elige un idioma (espanol o ingles');
if (idiom !== 'espanol' && idiom !== 'ingles') {
  alert('No es un idioma valido');
} else if (idiom === 'espanol') {
  alert('Hola Mundo');
} else if (idiom === 'ingles') {
  alert('Hello World');
}

/*
    2- Pide un numero al usuario del 1 al 10.
    Si el numero es 6, muestra un mensaje diciendo: Has ganado el permio!
    Sino, informale de que no ha ganado nada.
*/

let number = Number(prompt('Inserte un numero del 1 al 10'));
if (number > 10 || number <= 0) {
  alert('No es un numero valido');
} else if (number === 6) {
  alert('Has ganado el premio!!!');
} else {
  alert('Suerte para la proxima');
}
/*
    3- Pide un numero al usuario del 1 al 10.
    Si el numero es 6, muestra un mensaje diciendo: Has ganado el permio!
    Si el numero es 3, muestra un mensaje diciendo: Has ganado el permio pequeño!
    Para el resto de casos, no ha ganado nada
*/
let number3 = Number(prompt('Inserte un numero del 1 al 10'));
if (number3 > 10 || number3 <= 0) {
  alert('No es un numero valido');
} else if (number3 === 6) {
  alert('Has ganado el premio!!!');
} else if (number3 === 3) {
  alert('Has ganado el premio pequeno!!!');
} else {
  alert('Suerte para la proxima');
}
/*
    4- Pide un numero al usuario del 1 al 10.
    Si el numero es 6, muestra un mensaje diciendo: Has ganado el permio!
    Si el numero es 3, muestra un mensaje diciendo: Has ganado el permio pequeño!
    Si el numero es 7, muestra un mensaje diciendo: Has ganado el permio mediano!
    Si el numero es 10, muestra un mensaje diciendo: Has ganado el permio grande!
    Para el resto de casos, no ha ganado nada
*/
let number4 = Number(prompt('Inserte un numero del 1 al 10'));
if (number4 > 10 || number4 <= 0) {
  alert('No es un numero valido');
} else if (number4 === 6) {
  alert('Has ganado el premio!!!');
} else if (number4 === 3) {
  alert('Has ganado el premio pequeno!!!');
} else if (number4 === 7) {
  alert('Has ganado el premio mediano!!!');
} else if (number4 === 10) {
  alert('Has ganado el premio grade!!!');
} else {
  alert('Suerte para la proxima');
}

/*
    5- Pide un numero al usuario del 1 al 10.
    Si el numero es 6, muestra un mensaje diciendo: Has ganado el permio!
    Si el numero es 3, muestra un mensaje diciendo: Has ganado el permio pequeño!
    Si el numero es 7, muestra un mensaje diciendo: Has ganado el permio mediano!
    Si el numero es 10, muestra un mensaje diciendo: Has ganado el permio grande!
    Si el numero es 1 o 2, muestra un mensaje diciendo: Has ganado el permio secreto!
    Para el resto de casos, no ha ganado nada
*/
let number5 = Number(prompt('Inserte un numero del 1 al 10'));
if (number5 > 10 || number5 <= 0) {
  alert('No es un numero valido');
} else if (number5 === 6) {
  alert('Has ganado el premio!!!');
} else if (number5 === 3) {
  alert('Has ganado el premio pequeno!!!');
} else if (number5 === 7) {
  alert('Has ganado el premio mediano!!!');
} else if (number5 === 10) {
  alert('Has ganado el premio grade!!!');
} else if (number5 === 1 || number5 === 2) {
  alert('Has ganado el premio secreto!!!');
} else {
  alert('Suerte para la proxima');
}
/*
    6- Añade el 5 como un possible numero de premio secreto
*/
let number6 = Number(prompt('Inserte un numero del 1 al 10'));
if (number6 > 10 || number6 <= 0) {
  alert('No es un numero valido');
} else if (number6 === 6) {
  alert('Has ganado el premio!!!');
} else if (number6 === 3) {
  alert('Has ganado el premio pequeno!!!');
} else if (number6 === 7) {
  alert('Has ganado el premio mediano!!!');
} else if (number6 === 10) {
  alert('Has ganado el premio grade!!!');
} else if (number6 === 1 || number6 === 2 || number6 === 5) {
  alert('Has ganado el premio secreto!!!');
} else {
  alert('Suerte para la proxima');
}

/*
    7- Si has usado else if en el ejercicio anterior, intenta hacer lo mismo sin usarlo.
    Hay alguna diferencia de funcionamiento? es el mismo funcionamiento
*/
let number7 = Number(prompt('Inserte un numero del 1 al 10'));
if (number7 > 10 || number7 <= 0) {
  alert('No es un numero valido');
}
if (number7 === 6) {
  alert('Has ganado el premio!!!');
}
if (number7 === 3) {
  alert('Has ganado el premio pequeno!!!');
}
if (number7 === 7) {
  alert('Has ganado el premio mediano!!!');
}
if (number7 === 10) {
  alert('Has ganado el premio grade!!!');
}
if (number7 === 1 || number7 === 2 || number7 === 5) {
  alert('Has ganado el premio secreto!!!');
}
if (number7 === 8 || number7 === 9 || number7 === 4) {
  alert('Suerte para la proxima');
}

/*
    8- Pide un valor al usuario y muestra si es positivo o negativo.
    El 0 lo consideraremos positivo.
*/
let number8 = Number(prompt('Inserte un numero'));
if (number8 >= 0) {
  alert('Positivo');
} else if (number8 < 0) {
  alert('Negativo');
}

/*
    9- Pide 2 numeros al usuario y muestra cual es el mayor de los 2.

    Input: n1 = 3, n2 = 5
    Output: 5
*/
let number9 = Number(prompt('Inserte numero'));
let number92 = Number(prompt('Inserte otro numero'));
if (number9 > number92) {
  alert(number9);
} else if (number9 < number92) {
  alert(number92);
}

/*
    10- Haz lo mismo, pero ahora muestra el resultado de esta forma:

    Input: n1 = 3, n2 = 5
    Output: El numero 5 es mayor que el numero 3

    Pista: Puedes usar los template literals `texto` en lugar de "texto"
    Ej: `Hola mi nombre es ${nombre} y tengo ${age} anos`
*/

/*
    11- Pide 3 numeros al usuario y muestra cual es el mayor de los 3.
*/
let number1 = Number(prompt('Inserte numero'));
let number2 = Number(prompt('Inserte otro numero'));
if (number1 > number2) {
  alert(`El numero ${number1} es mayor que el numero ${number2}`);
} else if (number1 < number2) {
  alert(`El numero ${number2} es mayor que el numero ${number1}`);
}
/*

https://education.launchcode.org/intro-to-professional-web-dev/chapters/booleans-and-conditionals/exercises.html

Variable Name            Value
---------------------------------------
engineIndicatorLight  |  red blinking
spaceSuitsOn          |  true
shuttleCabinReady     |  true
crewStatus            |  spaceSuitsOn && shuttleCabinReady
computerStatusCode    |  200
shuttleSpeed          |  15000
*/
