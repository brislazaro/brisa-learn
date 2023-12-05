const cargarJSON = document.querySelector("#cargarJSON");
cargarJSON.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      console.log(resultado);
    });
}
