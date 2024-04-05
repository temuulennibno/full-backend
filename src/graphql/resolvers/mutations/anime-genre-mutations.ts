import { createAnimeGenre, deleteAnimeGenre, updateAnimeGenre } from "@/services/anime-genre-service";

export const animeGenreMutations = {
  createAnimeGenre: (_: any, { title }: { title: string }) => createAnimeGenre(title),
  updateAnimeGenre: (_: any, { input }: { input: { id: string; title: string } }) => updateAnimeGenre(input.id, input.title),
  deleteAnimeGenre: (_: any, { id }: { id: string }) => deleteAnimeGenre(id),
};
