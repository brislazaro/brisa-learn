/*
    El bucle FOR nos sirve para repetir un bloque de codigo muchas veces

    Usualmente se utiliza para recorrer arrays y trabajar con los valores de dentro.

    La sintaxis es la siguiente:

    for (let i = 0; i < array.length; i++) {
        // codigo del for
    }

    Esta separada en 3 bloques separados por ;

        Parte 1 --> Creamos la variable i y le asignamos el valor 0 --> let i > 0
        Parte 2 --> Condición de permanencia. Le decimos al for hasta cuando tiene que dar vueltas --> i < array.length
        Parte 3 --> Que tiene que hacer el for al terminar cada vuelta. Se le suele sumar 1 a i --> i++
*/

const names = ["Brisa", "Gerard", "Sara", "Max", "Solde"];

for (let i = 0; i < names.length; i++) {
  const element = names[i];

  console.log(element);
}

/*
    El for se utiliza para recorrer los arrays y hacer cosas con los valores que estos tienen dentro.

    Por ejemplo, calcular el precio total de un carrito de compra.
*/

const cartPrices = [5, 2.5, 29, 49, 4, 10, 19];

let finalPrice = 0; // Declaramos la variable donde vamos a ir sumandole el valor de cada item del carrito y le damos valor 0;

for (let i = 0; i < cartPrices.length; i++) {
  const element = cartPrices[i];

  finalPrice = finalPrice + element;
}

console.log(`El precio final es ${finalPrice}eur`);

/*
    Tambien podemos utilizar el FOR para otros usos, aunque son menos comunes.

    Por ejemplo, recorrer un string, ya que se comportan muy similar a los array.

    Cada vuelta, analizara un caracter

*/
const userName = "Brisa Lazaro";

for (let i = 0; i < userName.length; i++) {
  const currentLetter = userName[i];

  console.log("La letra actual es:", currentLetter);
}

/*
    Dentro del for podemos hacer lo que queramos y trabajar con el tipo de valor que sea.

    En el caso del carrito, normalmente en el array no tendremos solamente precios. Sino que tendremos un objeto con el nombre del producto y su precio.

    Tambien podemos calcular el precio en ese caso.

    El for, ira recorriendo cada uno de los objetos, y nosotros podemos acceder a la propiedad que nosotros necesitemos, en este caso .price
*/

const cartItems = [
  { item: "bolso", price: 200 },
  { item: "zapatos", price: 90 },
  { item: "camiseta", price: 15 },
  { item: "pantalones", price: 60 },
];

var cartFinalPrice = 0;

for (let i = 0; i < cartItems.length; i++) {
  const currentItem = cartItems[i];

  cartFinalPrice = cartFinalPrice + currentItem.price;
}

console.log(`El precio final del carrito es: ${cartFinalPrice}eur`);

/*
    Otro ejemplo muy comun de los For, es para buscar si un array tiene el elemento que nosotros queremos.
*/

const animals = ["jirafa", "perro", "gato", "tortuga", "cerdo", "elefante"];

const animalToFind = "perro";

let isAnimalInArray = false; // La ponemos en false inicialmente, ya que si una vez terminado el for no ha cambiado a true, significa que no lo contiene.

for (let i = 0; i < animals.length; i++) {
  const currentAnimal = animals[i];

  if (currentAnimal === animalToFind) {
    isAnimalInArray = true;
  }
}

console.log(
  `El animal ${animalToFind} esta en el array? --> ${isAnimalInArray}`
);

/*
    Porque no hemos puesto un else en el for anterior?

    for (let i = 0; i < animals.length; i++) {
        const currentAnimal = animals[i];

        if (currentAnimal === animalToFind) {
            isAnimalInArray = true;
        } else {
            isAnimalInArray = false;
        }
    }

    Si hacemos esto, una vez encuentre el animal, va a cambiar el valor a true. Pero eso no significa que deje de ejecutar el FOR.

    Por lo que va a seguir recorriendo el array, y el siguiente valor va a ser distinto de animalToFind, por lo que volver a poner el valor en false.
*/
