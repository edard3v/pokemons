import { FAV_POKEMONS } from "@consts/localStorage";

export const isFavoritePokemon = (pokemonName: string) => {
  const item = localStorage.getItem(FAV_POKEMONS);
  if (!item) return;

  try {
    const favPokemons = JSON.parse(item) as string[];
    const result = favPokemons.find((item) => item == pokemonName);
    return !!result;
  } catch {
    localStorage.removeItem(FAV_POKEMONS);
    location.reload();
  }
};
