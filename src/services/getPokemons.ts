import type { PokemonsRes } from "../types";

export const getPokemons = async (limit: number = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const fetchPokemons = await fetch(url);
  const pokemonsRes = (await fetchPokemons.json()) as PokemonsRes;

  return pokemonsRes;
};
