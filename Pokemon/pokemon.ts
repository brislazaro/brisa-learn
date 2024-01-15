const body = document.querySelector(".body");
const header = document.querySelector(".header-info");

const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get("name");

type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
};

async function pokemonData(name: string) {
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  let response = await fetch(apiURL);
  let json: Pokemon = await response.json();

  console.log(json);

  headerInfo(json);
}

if (!pokemonName) {
  alert("I need the pokemon name");
} else {
  pokemonData(pokemonName);
}

// function typeColor(name) {
//   body?.classList.add("color");
// }

function headerInfo(info: any) {
  const paddedId = String(info.id).padStart(3, "0");
  const id = document.createElement("p");
  id.innerHTML = `#${paddedId}`;

  header?.appendChild(id);
}
