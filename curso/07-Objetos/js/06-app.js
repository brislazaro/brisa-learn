const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300,
  diponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

const {
  nombre,
  informacion: { fabricacion },
} = producto;
