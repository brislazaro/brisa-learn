const container = document.querySelector(".container");
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
    console.log(unresolvedPokemons);
    const resolvedPokemons = await Promise.all(unresolvedPokemons);
    for(let i = 0; i < resolvedPokemons.length; i++){
        const currentPokemon = resolvedPokemons[i];
        const finalPokemon = await currentPokemon.json();
        const paddedId = String(finalPokemon.id).padStart(3, "0");
        console.log(finalPokemon);
        // Pintar card del pokemon
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        container?.appendChild(pokemonCard);
        const img = document.createElement("img");
        img.classList.add("cardImg");
        img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
        pokemonCard.appendChild(img);
        const pokemonName = document.createElement("p");
        pokemonName.classList.add("pokemon-name");
        pokemonName.innerHTML = capitalize(finalPokemon.name);
        pokemonCard.appendChild(pokemonName);
        const typeDiv = document.createElement("div");
        typeDiv.classList.add("typeDiv");
        pokemonCard.appendChild(typeDiv);
        const firstPokemonType = finalPokemon.types[0];
        const typeColor = getColorFromType(firstPokemonType.type.name);
        pokemonCard.classList.add(typeColor);
        const pokemonTypes = finalPokemon.types;
        for(let i = 0; i < pokemonTypes.length; i++){
            const element = pokemonTypes[i];
            console.log(element.type.name);
            const pokemonTypeCard = document.createElement("p");
            pokemonTypeCard.classList.add("pokemon-type");
            pokemonTypeCard.innerHTML = element.type.name;
            typeDiv.appendChild(pokemonTypeCard);
        }
    }
}
printResult();
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
} // fetch de las cosas
 // const result:PokemonListResponse[] = response.results

//# sourceMappingURL=index.242b51c6.js.map
