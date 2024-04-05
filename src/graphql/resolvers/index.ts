import { userQueries, animeGenreQueries } from "./queries";
import { userMutations, animeGenreMutations } from "./mutations";

export const resolvers = {
  Query: {
    ...userQueries,
    ...animeGenreQueries,
  },
  Mutation: {
    ...userMutations,
    ...animeGenreMutations,
  },
};
