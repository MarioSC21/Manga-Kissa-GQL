import { gql } from 'apollo-server'

export const typeDefs = gql`
enum serverName { 
  M
  YourUpload
  Burst
  RU
  Fireload
  Amazon
  AmazonEs
  STREAM
  Fembed
  Mp4upload
}
type objController {
  existe: Boolean!
  linkID: String! #variable creada para obtener el id del link
}

type controller {
  prev : objController!
  next : objController!
}

type video {
  serverName : String!
  url: String!
}

type verAnime {
  name: String!
  controles : controller!
  Videos : [video]!
}
extend type Query {
  allVerAnime(id: String!): verAnime!
  findServerVideoNameId(id: String!, serverName: serverName!): verAnime!
}
`
