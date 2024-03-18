import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs]);
