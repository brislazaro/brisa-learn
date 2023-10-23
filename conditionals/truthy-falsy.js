/*
    Valores Truthy y Falsy

    En javascript, hay valores que se resuelven en true o false, sin necesidad de usar comparadores.

        Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
            - true
            - 1
            - "Hola"
            - "false"
            - "0"
            - -1
            - -234
    
        Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
            - false
            - 0
            - ""
            - null
            - undefined
            - NaN
    
    Podemos usar estos valores en los if, sin necesidad de usar comparadores.
*/

const userName = "Pepe"; // truthy

if (userName) {
  console.log("El usuario tiene un nombre");
} else {
  // ...
}

const userName2 = ""; // falsy

if (userName2) {
  // ...
} else {
  console.log("El usuario no tiene un nombre");
}

const profileImage = null; // falsy

if (profileImage) {
  // ...
} else {
  console.log("El usuario no tiene una imagen de perfil");
}

const negativeValue = -234;

if (negativeValue) {
  // Un numero negativo se considera un valor truthy
  console.log("El valor es negativo");
} else {
  // ...
}

const zeroValue = 0;

if (zeroValue) {
  // ...
} else {
  // El 0 se considera un valor falsy
  console.log("El valor es 0");
}

if (zeroValue === 0) {
  console.log("El valor es 0");
} else {
  // ...
}
