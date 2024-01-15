const body = document.querySelector(".body");
const header = document.querySelector(".header-info");
const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");
async function pokemonData(name) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(apiURL);
    let json = await response.json();
    console.log(json);
    headerInfo(json);
}
if (!pokemonName) alert("I need the pokemon name");
else pokemonData(pokemonName);
// function typeColor(name) {
//   body?.classList.add("color");
// }
function headerInfo(info) {
    const paddedId = String(info.id).padStart(3, "0");
    const id = document.createElement("p");
    id.innerHTML = `#${paddedId}`;
    header?.appendChild(id);
}

//# sourceMappingURL=pokemon.8cf28159.js.map
