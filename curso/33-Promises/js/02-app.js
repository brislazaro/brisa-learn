const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`Agregado pais ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Alemania", mostrarPaises);
  }, 3000);
  setTimeout(() => {
    nuevoPais("Francia", mostrarPaises);
  }, 3000);
  setTimeout(() => {
    nuevoPais("Inglaterra", mostrarPaises);
  }, 3000);
}

iniciarCallbackHell();
