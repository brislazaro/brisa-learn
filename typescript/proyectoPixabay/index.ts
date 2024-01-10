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

  async function printResult() {
    let valor = busqueda.value;

    if (valor === "") {
      const errorCard = document.createElement("div");
      errorCard.classList.add("errorCard");
      result?.appendChild(errorCard);

      const errorText = document.createElement("p");
      errorText.classList.add("errorText");
      errorText.innerHTML = "Añade el nombre de un Pokemon";
      errorCard.appendChild(errorText);
    } else {
      try {
        createSpinner();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${valor}`;

        let response = await fetch(apiUrl);
        let json = (await response.json()) as Pokemon;

        const card = document.createElement("div");
        card.classList.add("resultCard");
        result?.appendChild(card);

        const img = document.createElement("img");
        img.classList.add("cardImg");
        img.src = json.sprites.front_default;
        card.appendChild(img);

        const name = document.createElement("p");
        name.classList.add("cardName");
        name.innerHTML = json.name;
        card.appendChild(name);
      } catch (error) {
        const errorCatch = document.createElement("div");
        errorCatch.classList.add("errorCard");
        result?.appendChild(errorCatch);

        const errorTextCatch = document.createElement("p");
        errorTextCatch.classList.add("errorText");
        errorTextCatch.innerHTML = "Añade un nombre valido";
        errorCatch.appendChild(errorTextCatch);
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
});

function removeSpinner() {
  const spinner = document.querySelector(".spinner");
  spinner?.remove();
}
