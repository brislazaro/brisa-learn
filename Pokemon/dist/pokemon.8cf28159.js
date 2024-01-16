const body = document.querySelector(".body");
const pokemonID = document.querySelector(".header-info");
const pokemonContainer = document.querySelector(".container");
const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");
async function pokemonData(name) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(apiURL);
    let pokemonInfo = await response.json();
    console.log(pokemonInfo);
    headerInfo(pokemonInfo);
    printPokemon(pokemonInfo);
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
    const id = String(pokemon.id).padStart(3, "0");
    const img = document.createElement("img");
    img.classList.add("cardImg");
    img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    pokemonContainer?.appendChild(img);
    const name = document.createElement("p");
    name.classList.add("nameCard");
    name.innerHTML = pokemon.name;
    pokemonContainer?.appendChild(name);
    const types = pokemon.types;
    const divType = document.createElement("div");
    divType.classList.add("divType");
    pokemonContainer?.appendChild(divType);
    for(let i = 0; i < types.length; i++){
        const pokemonTypes = types[i];
        console.log(pokemonTypes);
        const type = document.createElement("p");
        type.classList.add("typeCard");
        type.innerHTML = pokemonTypes.type.name;
        divType.appendChild(type);
    }
    const divInfo = document.createElement("div");
    divInfo.classList.add("divInfo");
    pokemonContainer?.appendChild(divInfo);
    const infoText = document.createElement("p");
    infoText.innerHTML = "Information";
    divInfo.appendChild(infoText);
}

//# sourceMappingURL=pokemon.8cf28159.js.map
