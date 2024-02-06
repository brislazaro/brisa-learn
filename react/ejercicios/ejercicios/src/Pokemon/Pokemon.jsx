import "./Pokemon.css";
import PokemonCard from "./PokemonCard";

function Pokemon() {
  return (
    <div className="pokemon-container">
      <PokemonCard
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        name="Pikachu"
        types={[
          { name: "fire", url: "http://asdasd.com" },
          { name: "poison", url: "http://asdasd.com" },
        ]}
      />
      <PokemonCard
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
        name="Pikachu"
        types={[{ name: "fire", url: "http://asdasd.com" }]}
      />

      <PokemonCard
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
        name="Pikachu"
        types={[{ name: "fire", url: "http://asdasd.com" }]}
      />
    </div>
  );
}

export default Pokemon;
