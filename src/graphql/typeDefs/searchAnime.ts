import { gql } from 'apollo-server'

export const typeDefs = gql`

  type dataSearchAnime {
    id: ID!
    infoId: String!
    name: String!
    description: String!
    image: String!
  }
  type searchAnime {
    status: Boolean
    result: String
    SizeSearch: Int!
    data: [dataSearchAnime]!
  }

  type Query {
    findTheSearchAnime(name: String!,limitDataSearch: Int): searchAnime!
  }
`
