const container = document.querySelector(".container");

type PokemonListResponse = {
  results: LitePokemon[];
};

type LitePokemon = {
  name: string;
  url: string;
};

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

  console.log(unresolvedPokemons);

  const resolvedPokemons = await Promise.all(unresolvedPokemons);

  for (let i = 0; i < resolvedPokemons.length; i++) {
    const currentPokemon = resolvedPokemons[i];

    const finalPokemon = await currentPokemon.json();

    console.log(finalPokemon.name);

    // Pintar card del pokemon
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    container?.appendChild(pokemonCard);

    const pokemonName = document.createElement("p");
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerHTML = finalPokemon.name;
    pokemonCard.appendChild(pokemonName);
  }
}

printResult();

// fetch de las cosas

// const result:PokemonListResponse[] = response.results
