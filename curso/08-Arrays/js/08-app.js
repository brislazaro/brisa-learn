const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//destructuring con arrays

const numeros = [10, 20, 30, 40, 50];

const [, , tercero] = numeros;

console.log(tercero);
