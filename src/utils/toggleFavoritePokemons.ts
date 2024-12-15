import { FAV_POKEMONS } from "@consts/localStorage";

export const toggleFavoritePokemons = (pokemonName: string) => {
  const item = localStorage.getItem(FAV_POKEMONS);
  if (!item) return;

  try {
    const favPokemons = JSON.parse(item) as string[];
    const newFavPokemons = [];
    let isFavPokemon = false;

    for (let i = 0; i < favPokemons.length; i++) {
      const item = favPokemons[i];
      if (item == pokemonName) isFavPokemon = true;
      else newFavPokemons.push(item);
    }

    !isFavPokemon && newFavPokemons.push(pokemonName);

    localStorage.setItem(FAV_POKEMONS, JSON.stringify(newFavPokemons));
  } catch {
    localStorage.removeItem(FAV_POKEMONS);
    location.reload();
  }
};
