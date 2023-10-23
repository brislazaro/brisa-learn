const inventory = [
  {
    id: 1,
    name: 'vestido',
    color: 'rosa',
    price: 20,
    category: 'ropa',
  },
  {
    id: 2,
    name: 'camiseta',
    color: 'azul',
    price: 10,
    category: 'ropa',
  },
  {
    id: 3,
    name: 'zapatos',
    color: 'negro',
    price: 40,
    category: 'calzado',
  },
  {
    id: 4,
    name: 'sombrero',
    color: 'marrón',
    price: 15,
    category: 'accesorio',
  },
  {
    id: 5,
    name: 'pantalón',
    color: 'gris',
    price: 30,
    category: 'ropa',
  },
  {
    id: 6,
    name: 'reloj',
    color: 'plateado',
    price: 50,
    category: 'accesorio',
  },
  {
    id: 7,
    name: 'sandalias',
    color: 'blanco',
    price: 25,
    category: 'calzado',
  },
  {
    id: 8,
    name: 'chaqueta',
    color: 'negro',
    price: 45,
    category: 'ropa',
  },
  {
    id: 9,
    name: 'collar',
    color: 'dorado',
    price: 18,
    category: 'accesorio',
  },
  {
    id: 10,
    name: 'falda',
    color: 'verde',
    price: 22,
    category: 'ropa',
  },
  {
    id: 11,
    name: 'botas',
    color: 'marron',
    price: 55,
    category: 'calzado',
  },
  {
    id: 12,
    name: 'gafas de sol',
    color: 'negro',
    price: 12,
    category: 'accesorio',
  },
  {
    id: 13,
    name: 'falda',
    color: 'rosa',
    price: 28,
    category: 'ropa',
  },
  {
    id: 14,
    name: 'sneakers',
    color: 'azul',
    price: 38,
    category: 'calzado',
  },
  {
    id: 15,
    name: 'cinturon',
    color: 'marron',
    price: 16,
    category: 'accesorio',
  },
];

function askForValueAndValidate(message) {
  let userInput;

  do {
    userInput = prompt(message);
  } while (userInput === null || userInput === '');

  return userInput;
}

function askForPriceAndValidate(message) {
  let userInput;
  let numberUserInput;
  do {
    do {
      userInput = prompt(message);
    } while (userInput === null);

    numberUserInput = Number(userInput);
  } while (isNaN(numberUserInput === true));

  return numberUserInput;
}

function isIdInsideInventory(id) {
  let isIdFound = false;

  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];

    if (id === element.id) {
      isIdFound = true;
    }
  }

  return isIdFound;
}

function askUserForCategory(message) {
  do {
    userInput = prompt(message);
  } while (userInput === null);

  return userInput;
}

let userIdentification;
let userOrAdmin;

do {
  userIdentification = prompt('Eres admin o user');
} while (userIdentification === null);

userOrAdmin = userIdentification.toLowerCase();

if (userOrAdmin === `user`) {
  let typesOfCategory = [];
  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];

    if (!typesOfCategory.includes(element.category)) {
      typesOfCategory.push(element.category);
    }
  }

  let userCategory;
  let finalProduct;
  let isUserCategoryInTypesOfCategory;
  let isfinalProductInCategory;
  do {
    userCategory = askUserForCategory(
      `Elige una de las siguientes categorias ${typesOfCategory}`
    );

    isUserCategoryInTypesOfCategory = false;
    isfinalProductInCategory = false;

    for (let i = 0; i < typesOfCategory.length; i++) {
      const element = typesOfCategory[i];

      if (userCategory === element) {
        isUserCategoryInTypesOfCategory = true;
      }
    }
  } while (isUserCategoryInTypesOfCategory === false);

  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];

    if (userCategory === element.category) {
      console.log(element.name);
    }
  }

  do {
    finalProduct = prompt(`Selecciona el articulo del filtro que elegiste`);

    for (let i = 0; i < inventory.length; i++) {
      const element = inventory[i];

      if (finalProduct === element.name && userCategory === element.category) {
        isfinalProductInCategory = true;
      }
    }
  } while (isfinalProductInCategory === false);

  let quantityOfProduct = Number(prompt('Introduce una cantidad')); // TODO: Validar esto usando la funcion de pedir price (cambiarle el nombre a uno mas adequado)

  let priceForTheProduct;

  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];

    if (finalProduct === element.name) {
      priceForTheProduct = element.price;
    }
  }

  let finalPrice = quantityOfProduct * priceForTheProduct;

  console.log(
    `Has comprado ${quantityOfProduct} del producto ${finalProduct} con un precio total de ${finalPrice}`
  );
}

if (userOrAdmin === `admin`) {
  let idOfNewProduct;
  let isIdInInventary;
  let isAddOrDelateProduct;

  do {
    isAddOrDelateProduct = prompt(`Desea AGREGAR o ELIMINAR un producto`);
  } while (
    isAddOrDelateProduct !== `agregar` &&
    isAddOrDelateProduct !== `eliminar`
  );

  if (isAddOrDelateProduct === `agregar`) {
    do {
      // Pedimos el ID al usuario
      idOfNewProduct = Number(prompt(`inserte el id del nuevo producto`));

      isIdInInventary = isIdInsideInventory(idOfNewProduct);
    } while (isIdInInventary === true);

    let nameOfNewProduct = askForValueAndValidate(
      `Inserta el nombre del nuevo articulo`
    );

    let colorOfNewProduct = askForValueAndValidate(
      `Inserta el color del nuevo articulo`
    );

    let priceOfNewProduct = askForPriceAndValidate(
      `Inserte el precio del nuevo articulo`
    );

    let categoryOfNewProduct = askForValueAndValidate(
      'Inserta la categoria del nuevo articulo'
    );

    let newProduct = {
      id: idOfNewProduct,
      name: nameOfNewProduct,
      color: colorOfNewProduct,
      price: priceOfNewProduct,
      category: categoryOfNewProduct,
    };

    inventory.push(newProduct);

    console.log(inventory);
  }

  let idToEliminate;
  if (isAddOrDelateProduct === 'eliminar') {
    let askForId = Number(prompt('inserte el id del producto a eliminar'));

    for (let i = 0; i < inventory.length; i++) {
      const element = inventory[i];

      if (askForId === element.id) {
        idToEliminate = inventory.filter((element) => element.id !== askForId);
      }
    }
  }
  console.log(idToEliminate);
}
