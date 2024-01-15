const body = document.querySelector(".body");
const pokemonID = document.querySelector(".header-info");
const pokemonContainer = document.querySelector(".container");
const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");
var Type;
(function(Type) {
    Type["Grass"] = "grass";
    Type["Fire"] = "fire";
    Type["Water"] = "water";
    Type["Bug"] = "bug";
    Type["Normal"] = "normal";
    Type["Poison"] = "poison";
    Type["Electric"] = "electric";
    Type["Fairy"] = "fairy";
    Type["Ground"] = "ground";
    Type["Ice"] = "ice";
    Type["Fighting"] = "fighting";
    Type["Flying"] = "flying";
    Type["Psychic"] = "psychic";
    Type["Rock"] = "rock";
    Type["Ghost"] = "ghost";
    Type["Steel"] = "steel";
    Type["Dragon"] = "dragon";
})(Type || (Type = {}));
async function pokemonData(name) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(apiURL);
    let pokemonInfo = await response.json();
    console.log(pokemonInfo);
    headerInfo(pokemonInfo);
    printPokemon(pokemonInfo);
    const types = pokemonInfo.types;
}
if (!pokemonName) alert("I need the pokemon name");
else pokemonData(pokemonName);
function headerInfo(info) {
    const paddedId = String(info.id).padStart(3, "0");
    const id = document.createElement("p");
    id.innerHTML = `#${paddedId}`;
    pokemonID?.appendChild(id);
}
function printPokemon(pokemon) {
    const name = document.createElement("p");
    name.innerHTML = pokemon.name;
    pokemonContainer?.appendChild(name);
    const type = document.createElement("p");
    type.innerHTML = `${pokemon.id}`;
    pokemonContainer?.appendChild(type);
}

//# sourceMappingURL=pokemon.8cf28159.js.map
