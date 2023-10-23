// Declarar una funcion
function printRecipe() {
  console.log('1 - Pela la patata');
  console.log('2 - Ponla dentro de una olla con agua hirviendo');
  console.log('3- Espera 30 min');
  console.log('4- Saca la patata y sirvela');
}

// Funciones que reciben parametros
function presentName(name) {
  console.log(`Hola me llamo ${name}`);
}

presentName('Gerard');

presentName('Brisa');

// Funciones que reciben mas de un parametro
function presentNameAndAge(name, age) {
  console.log(`Hola me llamo ${name} y tengo ${age} años`);
}

presentNameAndAge('Brisa', '25');

// Funciones que retornan un valor
function suma(number1, number2) {
  const result = number1 + number2;

  return result;
}

const addedNumbers = suma(5, 1);
console.log(addedNumbers);

// Funcion para pedir un numero al usuario y me retorne el valor
function askForNumber() {
  const numberAsString = prompt('Inserte un numero');

  if (numberAsString === null) {
    console.log('Este numero no es valido');
  } else {
    const number1 = Number(numberAsString);

    if (isNaN(number1)) {
      console.log('No es un numero');
    } else {
      return number1;
    }
  }
}

const number1 = askForNumber();

console.log('He pedido el numero', number1);
