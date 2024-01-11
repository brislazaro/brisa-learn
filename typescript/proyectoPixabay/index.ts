document.addEventListener("DOMContentLoaded", function () {
  const busqueda = document.querySelector("#termino") as HTMLInputElement;
  const buscarBtn = document.querySelector("#button");
  let result = document.querySelector("#resultado");

  type Pokemon = {
    name: string;
    sprites: {
      front_default: string;
    };
  };

  async function fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    let response = await fetch(apiUrl);
    let json = (await response.json()) as Pokemon;

    return json;
  }

  async function printResult() {
    let valor = busqueda.value;

    if (valor === "") {
      createErrorCard("Introduce un pokemon");
    } else {
      try {
        createSpinner();

        const pokemon = await fetchPokemon(valor);

        createCard(pokemon);
      } catch (error) {
        createErrorCard("Introduce un nombre valido");
      } finally {
        removeSpinner();
      }
    }
  }

  buscarBtn?.addEventListener("click", function (e) {
    if (result) {
      result.innerHTML = "";
    }

    e.preventDefault();
    printResult();
  });

  function createSpinner() {
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    result?.appendChild(spinner);
  }

  function removeSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner?.remove();
  }

  function createErrorCard(errorMessage: string) {
    const errorCard = document.createElement("div");
    errorCard.classList.add("errorCard");
    result?.appendChild(errorCard);

    const errorText = document.createElement("p");
    errorText.classList.add("errorText");
    errorText.innerHTML = errorMessage;
    errorCard.appendChild(errorText);
  }

  function createCard(info: Pokemon) {
    const card = document.createElement("div");
    card.classList.add("resultCard");
    result?.appendChild(card);

    debugger;
    const img = document.createElement("img");
    img.classList.add("cardImg");
    img.src = info.sprites.front_default;
    card.appendChild(img);

    const name = document.createElement("p");
    name.classList.add("cardName");
    name.innerHTML = info.name;
    card.appendChild(name);
  }
});
