const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
  llenarSelect();
});

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
});

function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
    ${auto.marca} ${auto.modelo}-${auto.year}-${auto.puertas}Puertas - Transmision:${auto.transmision}- Precio:${auto.precio}- Color:${auto.color}
    `;
    resultado.appendChild(autoHTML);
  });
}

function llenarSelect() {
  for (let index = max; index >= min; index--) {
    const opcion = document.createElement("option");
    opcion.value = index;
    opcion.textContent = index;

    year.appendChild(opcion);
  }
}

function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca);
}

function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}
