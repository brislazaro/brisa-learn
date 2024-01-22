const header = document.querySelector(".header");
const container = document.querySelector(".container");
const buscador = document.querySelector(".buscador") as HTMLInputElement;
const backButton = document.querySelector(".button");
const spinner = document.querySelector(".loader");

const pokeList: Pokemon[] = [];

function getColorFromType(type: string) {
  if (type === "grass") {
    return "grass";
  }

  if (type === "fire") {
    return "red";
  }

  if (type === "water") {
    return "blue";
  }

  if (type === "bug") {
    return "bug";
  }

  if (type === "normal") {
    return "gray";
  }

  if (type === "poison") {
    return "purple";
  }

  if (type === "electric") {
    return "electric";
  }

  if (type === "fairy") {
    return "pink";
  }

  if (type === "ground") {
    return "ground";
  }

  if (type === "ice") {
    return "ice";
  }

  if (type === "fighting") {
    return "fighting";
  }

  if (type === "flying") {
    return "flying";
  }

  if (type === "psychic") {
    return "psychic";
  }
  if (type === "rock") {
    return "rock";
  }
  if (type === "ghost") {
    return "ghost";
  }
  if (type === "steel") {
    return "stell";
  }
  if (type === "dragon") {
    return "dragon";
  }

  return "black";
}

async function printResult() {
  showHtmlElement(spinner!);
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  let response = await fetch(apiURL);
  let json: PokemonListResponse = await response.json();

  const jsonArray = json.results;

  const unresolvedPokemons: Promise<Response>[] = [];

  for (let i = 0; i < jsonArray.length; i++) {
    const pokemon = jsonArray[i];

    const apiPersonaje = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;

    const unresolvedReq = fetch(apiPersonaje);
    unresolvedPokemons.push(unresolvedReq);
  }

  const resolvedPokemons = await Promise.all(unresolvedPokemons);

  hideHtmlElement(spinner!);

  for (let i = 0; i < resolvedPokemons.length; i++) {
    const currentPokemon = resolvedPokemons[i];

    const finalPokemon: Pokemon = await currentPokemon.json();

    pokeList.push(finalPokemon);

    printCard(finalPokemon);
  }
}

printResult();

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

function printCard(pokemon: Pokemon) {
  const paddedId = String(pokemon.id).padStart(3, "0");

  const pokemonCard = document.createElement("a");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.href = `./pokemon.html?name=${pokemon.name}`;
  container?.appendChild(pokemonCard);

  const img = document.createElement("img");
  img.classList.add("cardImg");
  img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  pokemonCard.appendChild(img);

  const pokemonName = document.createElement("p");
  pokemonName.classList.add("pokemon-name");
  pokemonName.innerHTML = capitalize(pokemon.name);
  pokemonCard.appendChild(pokemonName);

  const typeDiv = document.createElement("div");
  typeDiv.classList.add("typeDiv");
  pokemonCard.appendChild(typeDiv);

  const firstPokemonType = pokemon.types[0];
  const typeColor = getColorFromType(firstPokemonType.type.name);
  pokemonCard.classList.add(typeColor);

  const pokemonTypes = pokemon.types;

  for (let i = 0; i < pokemonTypes.length; i++) {
    const element = pokemonTypes[i];

    // console.log(element.type.name);

    const pokemonTypeCard = document.createElement("p");
    pokemonTypeCard.classList.add("pokemon-type");
    pokemonTypeCard.innerHTML = element.type.name;
    typeDiv.appendChild(pokemonTypeCard);
  }
}

buscador?.addEventListener("change", function (e: any) {
  e.preventDefault();

  const value = e.target.value;

  if (!value) {
    container.innerHTML = "";

    for (let i = 0; i < pokeList.length; i++) {
      const pokemon = pokeList[i];
      printCard(pokemon);
    }

    hideHtmlElement(backButton!);
    return;
  }

  console.log(value);

  const filteredPokemons = pokeList.filter((pokemon: Pokemon) => {
    if (pokemon.name.includes(value)) {
      return true;
    } else {
      return false;
    }
  });

  console.log(filteredPokemons);

  if (filteredPokemons.length === 0) {
    alert("Inserta un nombre valido");
  } else {
    container.innerHTML = "";

    for (let i = 0; i < filteredPokemons.length; i++) {
      const pokemon = filteredPokemons[i];

      printCard(pokemon);
    }

    showHtmlElement(backButton!);
  }
});

function showHtmlElement(element: Element) {
  element?.classList.remove("hidden");
}

function hideHtmlElement(element: Element) {
  element?.classList.add("hidden");
}

backButton?.addEventListener("click", function () {
  container.innerHTML = "";

  console.log("hola");

  for (let i = 0; i < pokeList.length; i++) {
    const element = pokeList[i];

    printCard(element);
  }

  buscador.value = "";
  hideHtmlElement(backButton);
});
