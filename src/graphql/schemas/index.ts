import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { animeGenreTypeDefs } from "./anime-genre-schema";
import { commonTypeDefs } from "./common-schema";

export const typeDefs = mergeTypeDefs([commonTypeDefs, userTypeDefs, animeGenreTypeDefs]);
