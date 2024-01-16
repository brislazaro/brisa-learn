enum Type {
  Grass = "grass",
  Fire = "fire",
  Water = "water",
  Bug = "bug",
  Normal = "normal",
  Poison = "poison",
  Electric = "electric",
  Fairy = "fairy",
  Ground = "ground",
  Ice = "ice",
  Fighting = "fighting",
  Flying = "flying",
  Psychic = "psychic",
  Rock = "rock",
  Ghost = "ghost",
  Steel = "steel",
  Dragon = "dragon",
}

type PokemonType = {
  slot: number;
  type: {
    name: Type;
    url: string;
  };
};

type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
};

type PokemonListResponse = {
  results: LitePokemon[];
};

type LitePokemon = {
  name: string;
  url: string;
};
