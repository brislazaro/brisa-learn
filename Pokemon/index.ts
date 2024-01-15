const container = document.querySelector(".container");

type PokemonListResponse = {
  results: LitePokemon[];
};

type LitePokemon = {
  name: string;
  url: string;
};

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

  for (let i = 0; i < resolvedPokemons.length; i++) {
    const currentPokemon = resolvedPokemons[i];

    const finalPokemon = await currentPokemon.json();

    printCard(finalPokemon);
  }
}

printResult();

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

function printCard(pokemon) {
  const paddedId = String(pokemon.id).padStart(3, "0");

  const pokemonCard = document.createElement("a");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.href = "./pokemon.html";
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

    console.log(element.type.name);

    const pokemonTypeCard = document.createElement("p");
    pokemonTypeCard.classList.add("pokemon-type");
    pokemonTypeCard.innerHTML = element.type.name;
    typeDiv.appendChild(pokemonTypeCard);
  }
}
// fetch de las cosas

// const result:PokemonListResponse[] = response.results
