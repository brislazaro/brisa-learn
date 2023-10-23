/*
    1- Crea un objeto que represente un coche .
    Este objeto tendrá las siguientes propiedades:
        - marca: "BMW"
        - modelo: "Serie 3"
        - color: "red"
*/
const car = {
  marca: 'BMW',
  modelo: 'Serie3',
  color: 'red',
};
/*
    2- Imprime por pantalla el objeto coche.
*/
console.log(car);
/*
    3- Imprime por pantalla la marca del coche y el modelo por separado (en 2 console.logs distintos)
*/
console.log(car.marca);
console.log(car.modelo);
/*
    4- Modifica el color del coche a "blue".
*/
car.color = 'blue';
/*
    5- Añade una nueva propiedad al coche llamada "year" y asignale un valor.
    Vuelve a mostrar el objeto por consola para comprobar que se ha añadido correctamente.
*/
car.year = 2023;
console.log(car);
/*
    6- Crea un objeto que represente una persona y dejalo vacio.

    Puedes crear un objeto vacio asi: const myObject = {}
*/
const myObject = {};
/*
    7- Añadele un nombre a la persona
*/
myObject.name = 'Brisa';
/*
    8- Añadele una edad a la persona
*/
myObject.age = 25;
/*
    9- Añadele una propiedad isMarried y asignale un valor
*/
myObject.isMarried = false;
/*
    10- Modifica la propiedad edad de la persona y asignale un valor
*/
myObject.age = 26;
/*
    11- Imprime todas las propiedades de la persona por consola. Hazlo en console.logs separados.
*/
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.isMarried);
