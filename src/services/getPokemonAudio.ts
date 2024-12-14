import { getPokemonId } from "./getPokemonId";

export const getPokemonAudio = (url: string) => {
  const pokemonId = getPokemonId(url);

  return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
};
