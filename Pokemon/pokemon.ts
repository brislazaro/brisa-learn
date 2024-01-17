const body = document.querySelector(".body");
const pokemonID = document.querySelector(".header-info");
const pokemonContainer = document.querySelector(".container");
const above = document.querySelector(".above-section");

const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");

function getColorFromTypePokemon(type: Type) {
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

async function pokemonData(name: string) {
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  let response = await fetch(apiURL);
  let pokemonInfo: Pokemon = await response.json();

  const apiInfo = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;
  let info = await fetch(apiInfo);
  // TODO:cambiar type
  let description: Pokemon = await info.json();

  console.log(pokemonInfo);

  headerInfo(pokemonInfo);
  printPokemon(pokemonInfo, description);
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

// TODO: cambiar el tipo de description
function printPokemon(pokemon: Pokemon, description: Pokemon) {
  const firstPokemonType = pokemon.types[0].type.name;
  const typeColor = getColorFromTypePokemon(firstPokemonType);
  above?.classList.add(typeColor);

  const id = String(pokemon.id).padStart(3, "0");

  const img = document.createElement("img");
  img.classList.add("cardImg");
  img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  pokemonContainer?.appendChild(img);

  const name = document.createElement("p");
  name.classList.add("nameCard");
  name.innerHTML = capitalize(pokemon.name);
  pokemonContainer?.appendChild(name);

  const types = pokemon.types;

  const divType = document.createElement("div");
  divType.classList.add("divType");
  pokemonContainer?.appendChild(divType);

  for (let i = 0; i < types.length; i++) {
    const pokemonType = types[i];

    console.log(pokemonType);

    const type = document.createElement("p");
    type.classList.add("typeCard");
    type.innerHTML = pokemonType.type.name;
    const tipos = getColorFromTypePokemon(pokemonType.type.name);
    type.classList.add(tipos);

    divType.appendChild(type);
  }

  const divInfo = document.createElement("div");
  divInfo.classList.add("divInfo");
  pokemonContainer?.appendChild(divInfo);

  title("Informacion");

  descripcion(pokemon, description);

  title("Static Basic");

  const stats = pokemon.stats;

  for (let i = 0; i < stats.length; i++) {
    const currentStat = stats[i];

    const statContainer = document.createElement("div");
    statContainer.classList.add("stat");
    divInfo.appendChild(statContainer);

    const label = document.createElement("label");
    label.innerHTML = capitalize(currentStat.stat.name);
    statContainer.appendChild(label);

    const progressBar = document.createElement("progress");
    progressBar.classList.add("progress");
    progressBar.max = 155;
    progressBar.value = currentStat.base_stat;
    // const statColor = getColorFromTypePokemon(firstPokemonType);
    // progressBar.classList.add(statColor);
    statContainer.appendChild(progressBar);
  }
}

function title(mensaje: string) {
  const divInfo = document.querySelector(".divInfo");
  const infoText = document.createElement("p");
  infoText.classList.add("infoText");
  infoText.innerHTML = mensaje;
  divInfo?.appendChild(infoText);
}

function descripcion(pokemon: Pokemon, descripcion: Pokemon) {
  const divInfo = document.querySelector(".divInfo");

  const descriptionPokemon = document.createElement("p");
  descriptionPokemon.innerHTML = descripcion.flavor_text_entries[0].flavor_text;
  divInfo?.appendChild(descriptionPokemon);

  const infoFisica = document.createElement("div");
  infoFisica.classList.add("infoFisica");
  divInfo?.appendChild(infoFisica);

  const weight = document.createElement("p");
  weight.innerHTML = `Weight : ${pokemon.weight} KG`;
  infoFisica.appendChild(weight);

  const height = document.createElement("p");
  height.innerHTML = `Height : ${pokemon.weight} M`;
  infoFisica.appendChild(height);

  const abilities = pokemon.abilities;

  const divAbilities = document.createElement("div");
  infoFisica.appendChild(divAbilities);

  const abilitiesText = document.createElement("p");
  abilitiesText.innerHTML = `Abilities : `;
  divAbilities.appendChild(abilitiesText);

  for (let i = 0; i < abilities.length; i++) {
    const element = abilities[i];

    abilitiesText.innerHTML += `${element.ability.name}`;

    if (i === 0) {
      abilitiesText.innerHTML += ", ";
    }
  }

  const species = document.createElement("p");
  species.innerHTML = `Specie : ${pokemon.species.name}`;
  infoFisica.appendChild(species);
}

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}
