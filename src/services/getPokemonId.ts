export const getPokemonId = (url: string) => {
  return Number(url.split("/").at(-2));
};
