export const init_favorite_pokemons = () => {
  const favorite_pokemons = localStorage.getItem("favorite_pokemons");
  if (!favorite_pokemons) localStorage.setItem("favorite_pokemons", "[]");
};
