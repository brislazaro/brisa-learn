/*
    - IF -
    El if nos permite ejecutar un bloque de código SOLAMENTE si se cumple una condición.
    Dentro de los parentesis de la condición, siempre debe haber una expresión que se resuelva en un único valor true o false.
    Podemos usar comparadores de igualdad, desigualdad, mayor que, menor que, negación etc.

    if (condition) {
        // code to execute if condition is true
    }
*/

// Podemos escribir una expresión de javascript dentro del if, que se resuelva en true o false.
const userAge = 25;

// Si la expresion se resuelve en true, se ejecutara el bloque de código.
if (userAge >= 18) {
  console.log("Eres mayor de edad");
}

// O podemos guardar esa expresion en una variable y usarla en el if.
// Y explicitamente preguntar si es true o false.

const isUserAdult = userAge >= 18;

if (isUserAdult === true) {
  console.log("Eres mayor de edad");
}

const isUserLoggedIn = false;

if (isUserLoggedIn === false) {
  console.log("El usuario no esta logueado");
}

// O podemos no poner el === true/false ya que es redundante, ya que la variable ya es true o false.
// Que seria la forma mas comun de usarlo

/*
    Ejemplo con el código de arriba de isUserLoggedIn:

    if(isUserLoggedIn === false) {
    }

    La expresion de dentro del If se resoldra en 2 pasos:
        1- Va a ver que valor tiene la variable isUserLoggedIn --> false
        2- Va a terminar de resolver la expresion, que se veria de esta forma
    
        if(false === false) { ... }

    Se puede ver que es redundate, ya que si solo le pasaramos 
        if (true) { ... }
    
    Seria exactamente lo mismo. Recordemos que el if necesita una expresion que se resuelva en un unico valor true o false.
*/

const isUserFemale = true;
if (isUserFemale) {
  console.log("El usuario es una mujer");
}

// Tambien podemos usar el operador de negacion (!) para negar una expresion.
const isUserMale = false;

if (!isUserMale) {
  console.log("El usuario es una mujer");
}

// Internamente se resuelve de esta forma:
// if (!false) { ... }
// Recordemos que !, niega el valor de la expresion, por lo que !false se resuelve en true.
