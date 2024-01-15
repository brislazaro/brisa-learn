const body = document.querySelector(".body");
const pokemonID = document.querySelector(".header-info");
const pokemonContainer = document.querySelector(".container");

const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");

enum Type {
  Grass = "grass",
  Fire = "fire",
  Water = "water",
  Bug = "bug",
  Normal = "normal",
  Poison = "poison",
  Electric = "electric",
  Fairy = "fairy",
  Ground = "ground",
  Ice = "ice",
  Fighting = "fighting",
  Flying = "flying",
  Psychic = "psychic",
  Rock = "rock",
  Ghost = "ghost",
  Steel = "steel",
  Dragon = "dragon",
}

type PokemonType = {
  slot: number;
  type: {
    name: Type;
    url: string;
  };
};

type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
};

async function pokemonData(name: string) {
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  let response = await fetch(apiURL);
  let pokemonInfo: Pokemon = await response.json();

  console.log(pokemonInfo);

  headerInfo(pokemonInfo);
  printPokemon(pokemonInfo);

  const types = pokemonInfo.types;
}

if (!pokemonName) {
  alert("I need the pokemon name");
} else {
  pokemonData(pokemonName);
}

function headerInfo(info: any) {
  const paddedId = String(info.id).padStart(3, "0");
  const id = document.createElement("p");
  id.innerHTML = `#${paddedId}`;

  pokemonID?.appendChild(id);
}

function printPokemon(pokemon: Pokemon) {
  const name = document.createElement("p");
  name.innerHTML = pokemon.name;
  pokemonContainer?.appendChild(name);

  const type = document.createElement("p");
  type.innerHTML = `${pokemon.id}`;
  pokemonContainer?.appendChild(type);
}
