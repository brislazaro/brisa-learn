let ex11Animals = ['perro', 'gato', 'conejo', 'loro', 'tortuga', 'pez'];
let rabbitIndex = ex11Animals.indexOf('pez');

if (rabbitIndex !== -1) {
  if (ex11Animals[rabbitIndex].length >= 4) {
    console.log('Es un string largo');
  } else {
    console.log('Es un string corto');
  }
} else {
  console.log('No existe');
}

function getIsStringLongOrShort(animals, animalToFind) {
  let findAnimal = animals.includes(animalToFind);

  if (findAnimal) {
    if (animalToFind.length >= 4) {
      return 'largo';
    } else {
      return 'corto';
    }
  } else {
    return 'no existe';
  }
}

let animales = ['perro', 'gato', 'conejo', 'loro', 'tortuga'];
let animalABuscar = 'perro';

let findAnimals = getIsStringLongOrShort(animales, animalABuscar);

if (findAnimals === 'no existe') {
  console.log('Este animal no existe');
} else if (findAnimals === 'largo') {
  console.log('Este animal es largo');
} else {
  console.log('Este animal es corto');
}
