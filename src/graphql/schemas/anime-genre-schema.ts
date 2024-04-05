import gql from "graphql-tag";

export const animeGenreTypeDefs = gql`
  type AnimeGenre {
    id: ID!
    title: String!
    createdAt: Date!
  }

  input AnimeGenreUpdateInput {
    id: ID!
    title: String!
  }

  type Query {
    animeGenres: [AnimeGenre!]!
    animeGenre(id: ID!): AnimeGenre
  }
  type Mutation {
    createAnimeGenre(title: String!): AnimeGenre!
    updateAnimeGenre(input: AnimeGenreUpdateInput!): AnimeGenre!
    deleteAnimeGenre(id: ID!): AnimeGenre!
  }
`;
