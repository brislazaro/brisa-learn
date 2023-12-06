const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const ciudad = document.querySelector("#ciudad").value;

  if (ciudad === "") {
    mostrarError("Introduce una ciudad");
    return;
  }

  consultarAPI(ciudad);
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

function consultarAPI(ciudad) {
  const appID = "44d02e217fe7740b39f03cfeff7a37fb";

  const coordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${appID}`;

  spinner();

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

function formatTemp(temp) {
  return Math.round(temp);
}

function mostrarClima(datos) {
  const {
    main: { temp, temp_max, temp_min },
    name,
  } = datos;

  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `Clima en: ${name}`;
  nombreCiudad.classList.add("font-bold", "text-2xl");

  const actual = document.createElement("p");
  actual.innerHTML = `${formatTemp(temp)} &#8451`;
  actual.classList.add("font-bold", "text-6xl");

  const tempMax = document.createElement("p");
  tempMax.innerHTML = `Max:${formatTemp(temp_max)} &#8451`;
  tempMax.classList.add("text-xl");

  const tempMin = document.createElement("p");
  tempMin.innerHTML = `Min:${formatTemp(temp_min)} &#8451`;
  tempMin.classList.add("text-xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMax);
  resultadoDiv.appendChild(tempMin);

  resultado.appendChild(resultadoDiv);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHTML();
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
    
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>

    `;

  resultado.appendChild(divSpinner);
}
