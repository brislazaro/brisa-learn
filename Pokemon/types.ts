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
  abilities: abilities[];
  species: species;
  types: PokemonType[];
  stats: stats[];
};

type PokemonWithDescription = {
  flavor_text_entries: { flavor_text: string }[];
};

type PokemonListResponse = {
  results: LitePokemon[];
};

type LitePokemon = {
  name: string;
  url: string;
};

type abilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type species = {
  name: string;
  url: string;
};

type stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
