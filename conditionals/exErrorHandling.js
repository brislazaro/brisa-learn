/*
    1- Pide un valor al usuario indicandole que puede solamente puede ser: 'caminar'.
    Si el valor no es correcto, muestra un mensaje de error usando Alert.
    En caso contrario, muestra un console.log que diga: 'El valor introducido es correcto'.
*/
const case1 = prompt('Inserta la palabra caminar');
if (case1 !== 'caminar') {
  alert('El valor introduccido es incorrecto');
} else {
  alert('El valor intruccido es correcto');
}
/*
    2- Pide un valor al usuario indicandole que puede ser: 'caminar' o 'correr'.
    Si el valor no es correcto, muestra un mensaje de error usando Alert.
    En caso contrario, muestra un console.log que diga: 'El valor introducido es correcto'.
*/
let case2 = prompt('Inserta la palabra caminar o correr');
if (case2 !== 'caminar' && case2 !== 'correr') {
  alert('El valor es incorrecto');
} else {
  alert('El valor intruddcio es correcto');
}

/*
    3- Pide un NUMERO al usuario indicando que puede ser 1 o 2.
    Si el numero es cualquier otro numero, debera mostrar un mensaje de error usando Alert.
    En caso contrario, muestra un console.log que diga: 'El valor introducido es correcto'.
*/

let case3 = prompt('Inserta el numero 1 o 2');

case3 = Number(case3);

if (case3 !== 1 && case3 !== 2) {
  alert('El valor es incorrecto');
} else {
  alert('El valor es correcto');
}

/*
    4- Pide un valor al usuario indicandole que puede ser: 'caminar', 'correr' o 'saltar'.
    Si el valor no es correcto, muestra un mensaje de error usando Alert.
    En caso contrario, muestra un console.log que diga: 'El valor introducido es correcto'.
*/

let case4 = prompt('Inserta la palabra caminar o correr o saltar');

if (case4 !== 'caminar' && case4 !== 'correr' && case4 !== 'saltar') {
  alert('El valor es incorrecto');
} else {
  alert('El valor es correcto');
}

/*
    5- Brisa tiene una tienda de frutas y verduras y un comprador esta intentando comprar manzanas.
    Brisa solamente dispone de 5 manzanas.
    
    Lee el codigo siguiente, y modificalor para asegurate de que si el comprador intenta comprar mas manzanas de las que tiene Brisa,
    Brisa le diga al usuario: "No tengo tantas manzanas".
    En caso contrario, Brisa le dira al usuario: "Toma tus manzanas".
*/

const ex5BuyerCount = Number(prompt('Cuantas manzanas quieres?'));
if (ex5BuyerCount > 5) {
  alert('No tengo tantas manzanas');
} else {
  alert('Toma tus manzanas ');
}

/*
    6- Ahora Brisa se ha dado cuenta que a veces cuando pregunta cuantas manaznas quieren, 
    los compradores no le dicen un numero, sino que le dicen cosas raras como por ejemplo: 
        - "Vamonos a la miqueta"
        - "Quiero 3 manzanas"
        - "@#$@#$@#$"
    
    Y Brisa no sabe como solucionarlo, ya que ella solo los entiende cuando le dicen un numero.

    Usa el codigo del ejercicio anterior, y asegurate de que si el comprador no le dice un numero, muestre un mensaje de error diciendo: "Esto no es un numero".
*/
const ex6BuyerCount = Number(prompt('Cuantas manzanas quieres?'));
if (ex6BuyerCount > 5) {
  alert('No tengo tantas manzanas');
} else if (isNaN(ex6BuyerCount)) {
  alert('Esto no es un numero');
} else {
  alert('Toma tus manzanas ');
}

/*
    7- Para terminar, ahora resulta que hay veces que los usuarios cancelan la compra de manzanas, y no dicen nada (null).
    Cuando los usuarios digan null, brisa debera decirles: "No quiere manzanas, muchas gracias, siguiente cliente".

    Modifica el codigo del ejercicio anterior para cumplir con este requisito.

    Pista: Si convertimoso null a number, el resultado es 0. Podrias intentar hacer la conversión a numero en 2 pasos. Primero obtener el valor del prompt, y luego convertirlo a numero.
*/

let ex7BuyerCount = prompt('Cuantas manzanas quieres?');
if (ex7BuyerCount === null) {
  alert('No quiere manzanas, muchas gracias, siguiente compra');
} else {
  ex7BuyerCount = Number(ex7BuyerCount);

  if (ex7BuyerCount > 5) {
    alert('No tengo tantas manzanas');
  } else if (isNaN(ex7BuyerCount)) {
    alert('Esto no es un numero');
  } else {
    alert('Toma tus manzanas ');
  }
}
