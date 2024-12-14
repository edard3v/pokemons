import { getPokemonId } from "./getPokemonId";

export const getPokemonImg = (url: string) => {
  const pokemonId = getPokemonId(url);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
};
