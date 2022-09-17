import { gql } from 'apollo-server'

export const typeDefs = gql`
type AnimeHome {
  id: ID!
  idNameInfo: String!
  title: String!
  image: String!
  episode: String!
  info: infoAnime!
  verUltimoCapitulo: verAnime!
}
extend type Query {
  animeHomeCount: Int!
  allAnimeHome(limit: Int): [AnimeHome]!
  findCapitulosHome(episode: String!): [AnimeHome]!
}
`
