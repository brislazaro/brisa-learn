const header = document.querySelector(".header");
const container = document.querySelector(".container");
const buscador = document.querySelector(".buscador");
const button = document.querySelector(".button");
const pokeList = [];
function getColorFromType(type) {
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
async function printResult() {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    let response = await fetch(apiURL);
    let json = await response.json();
    const jsonArray = json.results;
    const unresolvedPokemons = [];
    for(let i = 0; i < jsonArray.length; i++){
        const pokemon = jsonArray[i];
        const apiPersonaje = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        const unresolvedReq = fetch(apiPersonaje);
        unresolvedPokemons.push(unresolvedReq);
    }
    const resolvedPokemons = await Promise.all(unresolvedPokemons);
    for(let i = 0; i < resolvedPokemons.length; i++){
        const currentPokemon = resolvedPokemons[i];
        const finalPokemon = await currentPokemon.json();
        pokeList.push(finalPokemon);
        printCard(finalPokemon);
    }
}
printResult();
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function printCard(pokemon) {
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
    for(let i = 0; i < pokemonTypes.length; i++){
        const element = pokemonTypes[i];
        // console.log(element.type.name);
        const pokemonTypeCard = document.createElement("p");
        pokemonTypeCard.classList.add("pokemon-type");
        pokemonTypeCard.innerHTML = element.type.name;
        typeDiv.appendChild(pokemonTypeCard);
    }
}
buscador?.addEventListener("change", function(e) {
    e.preventDefault();
    const value = e.target.value;
    if (!value) {
        container.innerHTML = "";
        for(let i = 0; i < pokeList.length; i++){
            const pokemon = pokeList[i];
            printCard(pokemon);
        }
        return;
    }
    console.log(value);
    const filteredPokemons = pokeList.filter((pokemon)=>{
        if (pokemon.name.includes(value)) return true;
        else return false;
    });
    console.log(filteredPokemons);
    if (filteredPokemons.length === 0) alert("Inserta un nombre valido");
    else {
        container.innerHTML = "";
        for(let i = 0; i < filteredPokemons.length; i++){
            const pokemon = filteredPokemons[i];
            printCard(pokemon);
        }
        showButton();
    }
});
function showButton() {
    button?.classList.remove("button-none");
}
function delateButton() {
    button?.classList.add("button-none");
}
button?.addEventListener("click", function() {
    container.innerHTML = "";
    console.log("hola");
    for(let i = 0; i < pokeList.length; i++){
        const element = pokeList[i];
        printCard(element);
    }
    buscador.value = "";
    delateButton();
});

//# sourceMappingURL=index.242b51c6.js.map
