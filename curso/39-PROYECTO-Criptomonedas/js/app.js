const select = document.querySelector("#criptomonedas");
const moneda = document.querySelector("#moneda");

const URL =
  "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR";
const criptomonedasURL =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

fetch(criptomonedasURL)
  .then((datos) => datos.json())
  .then((datos) => {
    printCriptomonedas(datos.Data);
    console.log(datos);
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

select.addEventListener("change", function (e) {
  let selectValue = select.value;
  console.log(selectValue);
});
