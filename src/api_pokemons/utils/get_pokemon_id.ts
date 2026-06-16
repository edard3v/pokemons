export const get_pokemon_id = (url: string) => {
  const pokemon_id = url.split("/").at(-2);

  return pokemon_id;
};
