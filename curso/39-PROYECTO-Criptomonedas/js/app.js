const select = document.querySelector("#criptomonedas");
const moneda = document.querySelector("#moneda");
const cotizarBtn = document.querySelector("#cotizarBtn");
const resultado = document.querySelector("#resultado");
const spinner = document.querySelector(".half-circle-spinner");

const criptomonedasURL =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

fetch(criptomonedasURL)
  .then((datos) => datos.json())
  .then((datos) => {
    printCriptomonedas(datos.Data);
  });

function printCriptomonedas(criptomonedas) {
  for (let i = 0; i < criptomonedas.length; i++) {
    const element = criptomonedas[i];

    const optionSelect = document.createElement("option");
    optionSelect.innerHTML = element.CoinInfo.FullName;
    optionSelect.value = element.CoinInfo.Name;
    select.appendChild(optionSelect);
  }
}

cotizarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let criptoValue = select.value;
  let monedaValue = moneda.value;

  // Añadir validacion

  showSpinner();

  const apiURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoValue}&tsyms=${monedaValue}`;

  fetch(apiURL)
    .then((data) => data.json())
    .then((data) => {
      setTimeout(() => {
        hideSpinner();
        printTotal(data.DISPLAY[criptoValue][monedaValue]);
        console.log(data);
      }, 1000);
    });

  function printTotal(data) {
    resultado.innerHTML = "";

    const divTotal = document.createElement("div");
    resultado.appendChild(divTotal);

    const total = document.createElement("p");
    total.innerHTML = `El precio es de: ${data.PRICE}`;
    divTotal.appendChild(total);

    const highPrice = document.createElement("p");
    highPrice.innerHTML = `Precio mas alto del dia: ${data.HIGHDAY}`;
    divTotal.appendChild(highPrice);

    const lowPrice = document.createElement("p");
    lowPrice.innerHTML = `Precio mas bajo del dia: ${data.LOWDAY}`;
    divTotal.appendChild(lowPrice);

    const variacion = document.createElement("p");
    variacion.innerHTML = `Variacion ultimas 24 HRS: ${data.CHANGEPCTDAY}%`;
    divTotal.appendChild(variacion);

    const actualizacion = document.createElement("p");
    actualizacion.innerHTML = `Ultima actualizacion: ${data.LASTUPDATE}`;
    divTotal.appendChild(actualizacion);
  }
});

// function spinnerResult() {
//   const spinner = document.createElement("div");
//   spinner.classList.add("half-circle-spinner");

//   resultado.appendChild(spinner);

//   const spinnerdiv = document.createElement("div");
//   spinnerdiv.classList.add("circle circle-1");
//   spinner.appendChild(spinnerdiv);
// }

function showSpinner() {
  spinner.classList.remove("oculto");
}

function hideSpinner() {
  spinner.classList.add("oculto");
}
