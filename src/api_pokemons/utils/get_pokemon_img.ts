import { get_pokemon_id } from "./get_pokemon_id";

export const get_pokemon_img = (url: string) => {
  const pokemon_id = get_pokemon_id(url);

  const pokemon_img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_id}.png`;

  return pokemon_img_url;
};
