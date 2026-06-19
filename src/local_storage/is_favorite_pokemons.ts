import { FAVORITE_POKEMON_ITEM } from "./consts";
import type { FavoritePokemon } from "./types";

export const is_favorite_pokemons = (name: string) => {
  const favorite_pokemons_str = localStorage.getItem(FAVORITE_POKEMON_ITEM);

  if (!favorite_pokemons_str)
    throw new Error(`No existe en local storage ${FAVORITE_POKEMON_ITEM}`);

  const favorite_pokemons: FavoritePokemon[] = JSON.parse(favorite_pokemons_str);

  return favorite_pokemons.some((item) => item.name === name);
};
