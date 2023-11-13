const nombre = "Hola";
const precio = 20;

const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300,
  diponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto:${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};
