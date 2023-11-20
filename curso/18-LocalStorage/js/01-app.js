localStorage.setItem("nombre", "Brisa");

const producto = {
  nombre: "Monitor de 24 pulgadas",
  precio: 300,
};

const productoString = JSON.stringify(producto);

const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);
