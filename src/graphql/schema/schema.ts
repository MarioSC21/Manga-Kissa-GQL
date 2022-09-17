import { gql } from 'apollo-server'
import {
  AnimeHome,
  VerAnime,
  InfoAnime,
  SearchAnime,
  DownloaderAnime
} from '../typeDefs'
import {
  verAnimeResolver,
  AnimeHomeResolver,
  infoAnimeResolver,
  searchAnimeResolver,
  downloaderAnimeResolver
} from '../resolvers'

// ? Schema principal necesario para inciar el apollo server
const rootTypeDefs = gql`
  type Query {
    _: String
  }
`
// ? Exportando todos los typeDefs
export const typeDefs = [
  rootTypeDefs,
  AnimeHome,
  VerAnime,
  InfoAnime,
  SearchAnime,
  DownloaderAnime
]

// ? Exportando todos los resolvers
export const resolvers = [
  verAnimeResolver,
  AnimeHomeResolver,
  infoAnimeResolver,
  searchAnimeResolver,
  downloaderAnimeResolver
]
