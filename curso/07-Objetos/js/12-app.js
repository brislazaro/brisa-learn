const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300,
  diponible: true,
};

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor 24 pulgadas", 500);
