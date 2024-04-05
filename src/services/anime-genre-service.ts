import { prisma } from "@/utils/prisma";

export const getAnimeGenres = async () => {
  try {
    const response = await prisma.animeGenre.findMany();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAnimeGenre = async (id: string) => {
  try {
    const response = await prisma.animeGenre.findUnique({ where: { id } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createAnimeGenre = async (title: string) => {
  try {
    const response = await prisma.animeGenre.create({ data: { title } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateAnimeGenre = async (id: string, title: string) => {
  try {
    const response = await prisma.animeGenre.update({ where: { id }, data: { title } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteAnimeGenre = async (id: string) => {
  try {
    const response = await prisma.animeGenre.delete({ where: { id } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
