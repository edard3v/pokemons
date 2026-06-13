export const extract_pokemon_info = (url: string) => {
  const pokemon_id = url.split("/").at(-2);

  const pokemon_img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_id}.png`;

  const pokemon_song_url = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${
    pokemon_id
  }.ogg`;

  return { pokemon_id, pokemon_img_url, pokemon_song_url };
};
