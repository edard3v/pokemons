import type { PokemonsRes } from "../types";

export const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const fetchPokemons = await fetch(url);
  const pokemonsRes = (await fetchPokemons.json()) as PokemonsRes;

  return pokemonsRes;
};
