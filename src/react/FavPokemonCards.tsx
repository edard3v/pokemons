import { FAV_POKEMONS } from "@consts/localStorage";

export default function FavPokemonCards() {
  const item = localStorage.getItem(FAV_POKEMONS) as string;
  const favPokemons = JSON.parse(item) as string[];

  if (!favPokemons.length) return null;
  return (
    <div className="grid gap-2 justify-center">
      {favPokemons.map((pokemon) => (
        <div key={pokemon} className="flex gap-2 items-center p-2 border-2 ">
          <div className="w-[150px] capitalize">{pokemon}</div>
          <button className="bg-red-600 px-2 text-white  rounded">
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
}
