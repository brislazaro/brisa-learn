const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300,
  diponible: true,
};

const medidas = {
  peso: "1kg",
  medidas: "1m",
};

const resultado = Object.assign(producto, medidas);

const resultado2 = { ...producto, ...medidas };
