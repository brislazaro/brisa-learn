const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (ciudad === "" || pais === "") {
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const mensajeAlerta = document.querySelector(".bg-red-100");
  if (!mensajeAlerta) {
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span
    `;

    container.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarAPI(ciudad, pais) {
  const appID = "44d02e217fe7740b39f03cfeff7a37fb";

  const coordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${appID}`;

  fetch(coordinatesUrl)
    .then((res) => res.json())
    .then((data) => {
      const cityData = data[0] || {};

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${appID}&units=metric`;
      fetch(weatherUrl)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => {
          limpiarHTML();
          if (respuesta.cod === "400") {
            mostrarError("Ciudad no encontrada");
            return;
          }

          mostrarClima(respuesta);
        });
    });
}

function mostrarClima(datos) {
  const {
    main: { temp, temp_max, temp_main },
  } = datos;

  const actual = document.createElement("p");
  actual.innerHTML = `${temp} &#8451`;
  actual.classList.add("font-bold", "text-6xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(actual);

  resultado.appendChild(resultadoDiv);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
