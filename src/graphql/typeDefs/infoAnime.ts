import { gql } from 'apollo-server'

export const typeDefs = gql`
  type listadoEpisodio {
    name: String!
    linkId: String!
    verEpisodio: verAnime!
  }

  type infoAnime {
    status: Boolean
    title: String!
    imagen: String!
    genero: [String]!
    episodios: String!
    estado: String!
    tipo: String!
    proxEpsiodio: String!
    sipnosis: String!
    listadoEpisodios: [listadoEpisodio]!
  }

  type Query {
    allInfoAnime(idName: String!, limitEpisode: Int): infoAnime!
  }
`
