import { get_pokemon_id } from "./get_pokemon_id";

export const get_pokemon_song = (url: string) => {
  const pokemon_id = get_pokemon_id(url);

  const pokemon_song_url = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${
    pokemon_id
  }.ogg`;

  return pokemon_song_url;
};
