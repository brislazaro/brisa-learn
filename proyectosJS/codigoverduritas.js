let basicInventary = ['strawberry', 'mango', 'grape', 'kiwi'];

function checkFruitInInventary(fruit) {
  let isFruitInInventary = false;

  for (let i = 0; i < basicInventary.length; i++) {
    const element = basicInventary[i];

    if (fruit === element) {
      isFruitInInventary = true;
    }
  }

  return isFruitInInventary;
}

function addToInventary() {
  let newFruit;
  let isFruitInInventary;

  do {
    newFruit = prompt(`Introduce el nuevo producto`);
    isFruitInInventary = checkFruitInInventary(newFruit);
  } while (isFruitInInventary === true);

  basicInventary.push(newFruit);
}

function printInventary() {
  console.log('El inventario contiene estas frutas:');

  for (let i = 0; i < basicInventary.length; i++) {
    const element = basicInventary[i];

    console.log(`- ${element}`);
  }
}

function eliminatedToInventary() {
  let productToDelate;
  let isProductInInventary;

  do {
    productToDelate = prompt(`Inserta el producto a eliminar`);
    isProductInInventary = checkFruitInInventary(productToDelate);
  } while (isProductInInventary === false);

  basicInventary = basicInventary.filter(
    (element) => element !== productToDelate
  );
}

function askForContinue() {
  let continueOrFinish;

  do {
    continueOrFinish = prompt(`Deseas continuar o finalizar `);
  } while (
    continueOrFinish !== `continuar` &&
    continueOrFinish !== `finalizar`
  );

  return continueOrFinish;
}

// function userContinue() {
//   do{
//     if (askForContinue() === `continue`) {
//       addToInventary();
//     }
//   }
// }

alert(`Bienvenido la version BASE de tu empresa`);

let repetitionInput;
do {
  let addOrDelate;

  do {
    addOrDelate = prompt(`Deseas agregar o eliminar algun producto`);
  } while (addOrDelate !== `agregar` && addOrDelate !== `eliminar`);

  if (addOrDelate === `agregar`) {
    addToInventary();
  }

  if (addOrDelate === `eliminar`) {
    eliminatedToInventary();
  }

  printInventary();

  repetitionInput = askForContinue();
} while (repetitionInput === 'continuar');

alert(`Nos vemos pronto`);
