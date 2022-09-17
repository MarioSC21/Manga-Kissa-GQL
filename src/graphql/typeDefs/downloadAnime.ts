import { gql } from 'apollo-server'

export const typeDefs = gql`
  type downloadObj{
    link: String!
    serverName: String!
  }
  type downloadAnime {
    Title: String!
    Dowload: [downloadObj]!
  }
  type Query {
    alldownloadAnime(id: String!): downloadAnime!
  }
  type Mutation {
    loginUserAnimeDownload(id:String!, username: String!, password: String!): downloadAnime!
  }
`
