import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";

export const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};
