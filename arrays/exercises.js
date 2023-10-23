/*
    1-Eres Brisa y tienes una tienda de frutas y verduras.

    Hoy llega un cliente y te pide un producto. Tienes que buscarlo en tu inventario y decirle si lo tienes o no.

    Vamos a simular que el cliente te pide guardandolo en una variable hardcodeada (sin usar prompt ni nada por el estilo) ver L.22

    Si el producto existe, vamos a decirle "Si lo tengo", sino "No lo tengo".
*/

const inventaryEx1 = [
  'manzana',
  'banana',
  'naranja',
  'pera',
  'tomate',
  'cebolla',
  'patata',
  'zanahoria',
];

const userRequestEx1 = 'kiwi';
let inventary = inventaryEx1.includes(userRequestEx1);
if (inventary === true) {
  console.log('si lo tengo');
} else {
  console.log('no lo tengo');
}

/*
    2- Ahora Brisa esta cansada de tener que escribir el mismo codigo cada vez que un cliente le pide un producto.

    Por lo que aunque las odie un poquito, se ha decidido a hacer una funcion que busque el producto para ella.
    Asi, solo tendra que llamar a la funcion y pasarle el producto que le piden para que le retorne:
        - true si lo tiene
        - false si no lo tiene
    
    Entonces, solo tendra que hacer un if/else para decirle al cliente si lo tiene o no.

    Tienes que crear una funcion llamada isProductInInventary que reciba un parametro (el producto que le piden) y retorne true o false si esta en el inventario.

    Cuando el usuario nos pida el producto,
       - Si lo tiene, dira si lo tengo
       - Sino, dira no lo tengo
*/

function isProductInInventaryEx2(fruit) {
  const privateInventary = [
    'manzana',
    'banana',
    'naranja',
    'pera',
    'tomate',
    'cebolla',
    'patata',
    'zanahoria',
  ];

  if (privateInventary.includes(fruit)) {
    return true;
  } else {
    return false;
  }
}

let userFruit = 'kiwi';
let fruitResult = isProductInInventaryEx2(userFruit);

if (fruitResult === true) {
  console.log('si lo tengo');
} else {
  console.log('no lo tengo');
}

// El resto del codigo aqui

/*
    3- Ahora Brisa quiere mejorar su inventario. Y a parte de saber que productos tiene, quiere saber cuantos de cada uno tiene.

    Que tipo de variable podemos usar dentro del inventario para guardar el producto y la cantidad?

    Crea un nuevo inventario improvedInventaryEx3 que tenga el producto y la cantidad de cada uno.
*/

const improvedInventaryEx3 = [
  {
    fruit: 'manzana',
    quantity: 4,
  },
  {
    fruit: 'banana',
    quantity: 7,
  },
  {
    fruit: 'naranja',
    quantity: 3,
  },
  {
    fruit: 'pera',
    quantity: 9,
  },
  {
    fruit: 'tomate',
    quantity: 6,
  },
  {
    fruit: 'cebolla',
    quantity: 8,
  },
  {
    fruit: 'patata',
    quantity: 3,
  },
  {
    fruit: 'zanahoria',
    quantity: 6,
  },
];

/*
    4- Con su nuevo inventario mejorado, Brisa quiere mejorar su funcion para que le diga el cliente a parte de si lo tiene o no, cuantos tiene.

    Asi que ahora, la funcion isProductInInventary tiene que retornar un objeto con dos propiedades:
        - hasProduct: true o false
        - quantity: la cantidad de productos que tiene. Si no tiene, la cantidad tiene que ser 0.
    
    Entonces, cuando llame a la funcion, tiene que decirle al usuario:
        - Si lo tiene: Tengo X de este producto
        - Si no lo tiene: No tengo este producto
*/

function isProductInInventaryEx4(fruit) {
  const improvedInventari = [
    {
      fruit: 'manzana',
      quantity: 4,
    },
    {
      fruit: 'banana',
      quantity: 7,
    },
    {
      fruit: 'naranja',
      quantity: 3,
    },
    {
      fruit: 'pera',
      quantity: 9,
    },
    {
      fruit: 'tomate',
      quantity: 6,
    },
    {
      fruit: 'cebolla',
      quantity: 8,
    },
    {
      fruit: 'patata',
      quantity: 3,
    },
    {
      fruit: 'zanahoria',
      quantity: 6,
    },
  ];

  for (let i = 0; i < improvedInventari.length; i++) {
    const element = improvedInventari[i];

    if (fruit === element.fruit) {
      return {
        hasProduct: true,
        quantity: element.quantity,
      };
    }
  }

  return {
    hasProduct: false,
    quantity: 0,
  };
}

let userFruitEx4 = 'kiwi';
let fruitResultx4 = isProductInInventaryEx4(userFruitEx4);

if (fruitResultx4.hasProduct === true) {
  console.log(`Tengo ${fruitResultx4.quantity} de este producto`);
} else {
  console.log('No tengo este producto');
}

/*
    5- Ahora, Brisa se da cuenta que los clientes quieren comprar mas de un producto a la vez.
    Pero los usuarios no pueden decirle cuanto quieren de cada producto, solo le pueden decir que productos quieren.

    Asi que Brisa quiere mejorar la funcion para que le diga al cliente si tiene todos los productos que le piden.

    Entonces, la funcion isProductInInventary a parte del producto que le piden, tiene que recibir cuantos quiere.

    Si tiene el producto, y la cantidad que le piden, tiene que retornar true.
    Si tiene el producto, pero no la cantidad que le piden, tiene que retornar false.
    Si no tiene el producto, tiene que retornar false.

    Pista: Fijate que los 2 ultimos escenarios son lo mismo, necesitamos 2 if distintos?

    Entonces, cuando llame a la funcion, tiene que decirle al usuario:
        - Si lo tiene: Tengo todo lo que me pediste
        - Si no lo tiene: No te puedo dar todo lo que me pediste      
*/

function isProductInInventaryEx5(fruit, quantity) {
  const improvedInventary = [
    {
      fruit: 'manzana',
      quantity: 4,
    },
    {
      fruit: 'banana',
      quantity: 7,
    },
    {
      fruit: 'naranja',
      quantity: 3,
    },
    {
      fruit: 'pera',
      quantity: 9,
    },
    {
      fruit: 'tomate',
      quantity: 6,
    },
    {
      fruit: 'cebolla',
      quantity: 8,
    },
    {
      fruit: 'patata',
      quantity: 3,
    },
    {
      fruit: 'zanahoria',
      quantity: 6,
    },
  ];

  for (let i = 0; i < improvedInventary.length; i++) {
    const element = improvedInventary[i];

    if (fruit === element.fruit && quantity <= element.quantity) {
      return true;
    }
  }

  return false;
}

let userFruit5 = 'kiwi';
let quantity = 6;
let userRequest = isProductInInventaryEx5(userFruit5, quantity);

if (userRequest === true) {
  console.log('Tengo todo lo que me pediste');
} else {
  console.log('No tengo suficiente');
}

/*
    6- Ahora, Brisa se da cuenta que hasta ahora los productos no tienen un precio, y que por tanto los clientes se llevan los productos gratis!!!!!!

    Alerta roja, Brisa esta perdiendo dinero.

    Asi que Brisa quiere mejorar su inventario para que tenga el producto, la cantidad y el precio de cada producto.
*/

const inventaryWithPricesEx6 = [
  {
    fruit: 'manzana',
    quantity: 4,
    price: 10,
  },
  {
    fruit: 'banana',
    quantity: 7,
    price: 8,
  },
  {
    fruit: 'naranja',
    quantity: 3,
    price: 15,
  },
  {
    fruit: 'pera',
    quantity: 9,
    price: 12,
  },
  {
    fruit: 'tomate',
    quantity: 6,
    price: 7,
  },
  {
    fruit: 'cebolla',
    quantity: 8,
    price: 9,
  },
  {
    fruit: 'patata',
    quantity: 3,
    price: 9,
  },
  {
    fruit: 'zanahoria',
    quantity: 6,
    price: 12,
  },
];

/*
    7- Ahora que ya tiene su inventario perfecto, Brisa tiene que poder decirle a los usuarios cuanto tienen que pagar.

    Asi que Brisa quiere mejorar su funcion.

    Ahora, la funcion isProductInInventary en lugar de retornar true o false, va a retornar un numero, que sera el precio total de los productos que le piden.

    Si no tiene el producto, tiene que retornar 0.
    Si tiene el producto, pero no la cantidad que le piden, tiene que retornar 0.

    Si tiene el producto y cantidad, tiene que retornar el precio total de los productos que le piden.

    Entonces, cuando llame a la funcion, tiene que decirle al usuario:
        - Si lo tiene: Tengo todo lo que me pediste, y te cuesta X
        - Si no lo tiene: No te puedo dar todo lo que me pediste
        
*/
function isProductInInventaryEx7(fruit, quantity) {
  const inventaryWithPrices = [
    {
      fruit: 'manzana',
      quantity: 4,
      price: 10,
    },
    {
      fruit: 'banana',
      quantity: 7,
      price: 8,
    },
    {
      fruit: 'naranja',
      quantity: 3,
      price: 15,
    },
    {
      fruit: 'pera',
      quantity: 9,
      price: 12,
    },
    {
      fruit: 'tomate',
      quantity: 6,
      price: 7,
    },
    {
      fruit: 'cebolla',
      quantity: 8,
      price: 9,
    },
    {
      fruit: 'patata',
      quantity: 3,
      price: 9,
    },
    {
      fruit: 'zanahoria',
      quantity: 6,
      price: 12,
    },
  ];

  for (let i = 0; i < inventaryWithPrices.length; i++) {
    const element = inventaryWithPrices[i];

    if (fruit === element.fruit && quantity <= element.quantity) {
      return element.price * quantity;
    }
  }

  return 0;
}

let fruit7 = 'tomate';
let quantity7 = 5;
let userRequest7 = isProductInInventaryEx7(fruit7, quantity7);

if (userRequest7 > 0) {
  console.log(`Tengo todo lo que me pediste y te cuesta ${userRequest7}`);
} else {
  console.log('No te puedo dar todo lo que me pediste');
}
