const carrito = [];

const producto = {
  nombre: "monitor 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "celular",
  precio: 800,
};

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
  nombre: "teclado",
  precio: 50,
};

carrito.unshift(producto3);

//Eliminar ultimo elemento de un arreglo

carrito.pop();

//Eliminar del inicio del arreglo

carrito.shift();
