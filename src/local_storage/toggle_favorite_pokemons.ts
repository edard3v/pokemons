import { FAVORITE_POKEMON_ITEM } from "./consts";
import type { FavoritePokemon } from "./types";

export const toggle_favorite_pokemons = (new_pokemon: FavoritePokemon) => {
  const favorite_pokemons_str = localStorage.getItem(FAVORITE_POKEMON_ITEM);
  if (!favorite_pokemons_str) throw new Error("No existe favorite_pokemons en local storage");

  const favorite_pokemons: FavoritePokemon[] = JSON.parse(favorite_pokemons_str);
  const pokemon_index = favorite_pokemons.findIndex((item) => item.name === new_pokemon.name);

  if (pokemon_index === -1) {
    favorite_pokemons.push(new_pokemon);
  } else {
    favorite_pokemons.splice(pokemon_index, 1);
  }

  localStorage.setItem(FAVORITE_POKEMON_ITEM, JSON.stringify(favorite_pokemons));
};
