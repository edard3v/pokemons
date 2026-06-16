export interface PokemonsRes {
  count: number;
  next: string;
  previous: null;
  results: PokemonsResResult[];
}

export interface PokemonsResResult {
  name: string;
  url: string;
}
