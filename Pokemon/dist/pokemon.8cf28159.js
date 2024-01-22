const body = document.querySelector(".body");
const pokemonID = document.querySelector(".header-info");
const pokemonContainer = document.querySelector(".container");
const above = document.querySelector(".above-section");
const spinnerConatiner = document.querySelector("loader");
const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");
function getColorFromTypePokemon(type) {
    if (type === "grass") return "grass";
    if (type === "fire") return "red";
    if (type === "water") return "blue";
    if (type === "bug") return "bug";
    if (type === "normal") return "gray";
    if (type === "poison") return "purple";
    if (type === "electric") return "electric";
    if (type === "fairy") return "pink";
    if (type === "ground") return "ground";
    if (type === "ice") return "ice";
    if (type === "fighting") return "fighting";
    if (type === "flying") return "flying";
    if (type === "psychic") return "psychic";
    if (type === "rock") return "rock";
    if (type === "ghost") return "ghost";
    if (type === "steel") return "stell";
    if (type === "dragon") return "dragon";
    return "black";
}
function textColor(type) {
    if (type === "grass") return "grass-color";
    if (type === "fire") return "red-color";
    if (type === "water") return "blue-color";
    if (type === "bug") return "bug-color";
    if (type === "normal") return "gray-color";
    if (type === "poison") return "purple-color";
    if (type === "electric") return "electric-color";
    if (type === "fairy") return "pink-color";
    if (type === "ground") return "ground-color";
    if (type === "ice") return "ice-color";
    if (type === "fighting") return "fighting-color";
    if (type === "flying") return "flying-color";
    if (type === "psychic") return "psychic-color";
    if (type === "rock") return "rock-color";
    if (type === "ghost") return "ghost-color";
    if (type === "steel") return "stell-color";
    if (type === "dragon") return "dragon-color";
    return "black";
}
async function pokemonData(name) {
    showHtmlElement(spinnerConatiner);
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(apiURL);
    let pokemonInfo = await response.json();
    const apiInfo = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;
    let info = await fetch(apiInfo);
    // TODO:cambiar type
    let description = await info.json();
    console.log(pokemonInfo);
    headerInfo(pokemonInfo);
    printPokemon(pokemonInfo, description);
    hideHtmlElement(spinnerConatiner);
}
if (!pokemonName) alert("I need the pokemon name");
else pokemonData(pokemonName);
function headerInfo(info) {
    const paddedId = String(info.id).padStart(3, "0");
    const id = document.createElement("p");
    id.innerHTML = `#${paddedId}`;
    pokemonID?.appendChild(id);
}
function printPokemon(pokemon, description) {
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
    for(let i = 0; i < types.length; i++){
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
    showTitle("Informacion");
    showDescripcion(pokemon, description);
    showTitle("Static Basic");
    const stats = pokemon.stats;
    for(let i = 0; i < stats.length; i++){
        const currentStat = stats[i];
        const statContainer = document.createElement("div");
        statContainer.classList.add("stat");
        divInfo.appendChild(statContainer);
        const label = document.createElement("label");
        label.innerHTML = capitalize(currentStat.stat.name);
        const statColor = textColor(firstPokemonType);
        label.classList.add(statColor);
        statContainer.appendChild(label);
        const barra = document.createElement("div");
        barra.classList.add("barra");
        statContainer.appendChild(barra);
        const value = document.createElement("p");
        value.innerHTML = `${currentStat.base_stat}`;
        barra.appendChild(value);
        const progressBar = document.createElement("progress");
        progressBar.classList.add("progress");
        progressBar.max = 155;
        progressBar.value = currentStat.base_stat;
        barra.appendChild(progressBar);
    }
}
function showTitle(mensaje) {
    const divInfo = document.querySelector(".divInfo");
    const infoText = document.createElement("p");
    infoText.classList.add("infoText");
    infoText.innerHTML = mensaje;
    divInfo?.appendChild(infoText);
}
function showDescripcion(pokemon, descripcion) {
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
    for(let i = 0; i < abilities.length; i++){
        const element = abilities[i];
        abilitiesText.innerHTML += `${element.ability.name}`;
        if (i === 0) abilitiesText.innerHTML += ", ";
    }
    const species = document.createElement("p");
    species.innerHTML = `Specie : ${pokemon.species.name}`;
    infoFisica.appendChild(species);
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function showHtmlElement(element) {
    element?.classList.remove("hidden");
}
function hideHtmlElement(element) {
    element?.classList.add("hidden");
}

//# sourceMappingURL=pokemon.8cf28159.js.map
