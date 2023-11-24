const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntaPresupuesto);
}

function preguntaPresupuesto() {
  const presupuestoUsuario = prompt("Cual es tu presupuesto?");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
}
