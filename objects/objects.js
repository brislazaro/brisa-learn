/*
    Igual que los valores que hemos visto hasta ahora:
        - string, number, boolean, null, undefined
        
    Existen otro tipo de valores en JS que son los objetos.

    Los objetos son muy utiles y se usan constantemente, por lo que son muy importantes.

    DEFINICION INCORRECTA PARA QUE SE ENTIENDA:
    Un objeto podemos verlo como un tipo de variable que puede tener otras variables dentro.

    DEFINICION MAS CORRECTA:
    Un objeto es una variable que representa "una cosa"/"una entidad" que tiene varias propiedades y
    cada una de estas propiedades tiene un valor.

    Para crear un objeto lo haremos con esta sintaxis

    const myObject = { }

    Dentro de los { } podremos definir todas las propiedades de ese objeto (estas son como las variables dentro de la variable)

    Para definir una propiedad usaremos la sintaxis nombreProp: valor
*/

const person = {
  name: 'Brisa',
  surname: 'Lazaro Campos',
  age: 25,
  birthDate: '16/09/1997',
  isMarried: true,
  dayOfDeath: undefined,
};

/*
    Si hacemos un console.log de person, nos mostrará todo el objeto con todas sus propiedades.

    Pero si queremos acceder a una propiedad especifica, lo haremos de la siguiente forma: person.nombrePropiedad
*/

console.log(person); // Imprime todo el objeto con todas las propiedades

console.log(person.name); // Imprime solamente la propiedad <name> de el objeto <person>

/*
    No solamente podemos acceder a los valores de sus propiedades, tambien podemos modificarlas
*/

person.name = 'Brisa Elvira'; // Modificamos la propiedad name del objeto

console.log(person);

/*
    Tambien podemos añadir nuevas propiedades al objeto

    Para ello, simplemente accedemos a la propiedad que queremos añadir y le asignamos un valor

*/

console.log('------------');
person.nonExistingProperty = 'This is a new property';
console.log(person);

/*
    -----------------------------------
            HACER EJERCICIOS 1
    -----------------------------------
*/

/*
    Esta forma de acceder a las propiedades del objeto, se dice: DOT NOTATION

    Pero exite otra forma equivalente que hace lo mismo, aunque tiene mas posibilidades, que se llama: BRACKET NOTATION

    Y se escribe asi:
    person['nombrePropiedad'] <--- importante usar los "" ya que dentro de los [] tenemos que poner un string.
*/

/*
    Un objeto puede tener tantas propiedades como queramos.

    Y una propiedad puede tener el valor que nosotros queramos, incluyendo otros objetos o incluso funciones
*/

const gymClass = {
  name: 'Bodypump',
  hour: '18:10',
  availableSpots: 22,
  reservedSpots: 15,
  trainer: {
    name: 'Andres',
    age: 28,
  },
};

const student = {
  name: 'Brisa',
  coursingYear: 1,
  yearCalification: 7.5,

  printDetails: function () {
    console.log(
      `Student ${student.name} is in year ${student.coursingYear} with this calification: ${this.yearCalification}`
    );
  },
};

student.printDetails();
