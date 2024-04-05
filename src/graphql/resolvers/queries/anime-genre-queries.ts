import { getAnimeGenre, getAnimeGenres } from "@/services/anime-genre-service";

export const animeGenreQueries = {
  animeGenres: () => getAnimeGenres(),
  animeGenre: (_: unknown, { id }: { id: string }) => getAnimeGenre(id),
};
