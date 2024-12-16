import { FAV_POKEMONS } from "@consts/localStorage";
import { toggleFavoritePokemons } from "@utils/toggleFavoritePokemons";
import { DOM } from "src/dom/dom";

export default function FavPokemonCards() {
  const item = localStorage.getItem(FAV_POKEMONS) as string;
  const favPokemons = JSON.parse(item) as string[];

  if (!favPokemons.length) return null;
  return (
    <div className="grid gap-2 justify-center">
      {favPokemons.map((pokemon) => (
        <div
          key={pokemon}
          id={pokemon}
          className="flex gap-2 items-center p-2 border-2 "
        >
          <a href={`/${pokemon}`} className="w-[150px] capitalize">
            {pokemon}
          </a>
          <button
            className="bg-red-600 px-2 text-white  rounded"
            onClick={() => {
              toggleFavoritePokemons(pokemon);
              const currentCard = DOM.select(pokemon);
              if (currentCard) currentCard.style.display = "none";
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
}
