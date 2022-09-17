import { typeAxios, endPointsUrlFenix } from '../../api'
import { UserInputError } from 'apollo-server'
import { IAnimeHome, IInfoAnime, IVerAnime } from '../../types'
const { home, infoAnime, verAnime } = endPointsUrlFenix

export const resolvers = {
  Query: {
    animeHomeCount: async () => {
      const animeHome = await typeAxios(home) as IAnimeHome[]
      return animeHome.length
    },
    allAnimeHome: async (parent: any, { limit }: { limit: number }) => {
      const animeHome = await typeAxios(home) as IAnimeHome[]
      if (limit) {
        if (limit > animeHome.length || limit < 0) {
          throw new UserInputError(
            `No se puede mostrar mas de ${animeHome.length} capitulos o menos de 0`,
            {
              argumentName: 'limit'
            }
          )
        }
        return animeHome.slice(0, limit)
      }
      return animeHome
    },
    findCapitulosHome: async (parent: any, { episode }: { episode: string }) => {
      const animeHome = await typeAxios(home) as IAnimeHome[]
      return animeHome.filter((anime) => anime.episode === episode)
    }
  },
  AnimeHome: {
    info: async ({ idNameInfo }: IAnimeHome) => {
      const animeHome = await typeAxios(infoAnime(idNameInfo)) as IInfoAnime
      return animeHome
    },
    verUltimoCapitulo: async ({ id }: IAnimeHome) => {
      const animeVer = await typeAxios(verAnime(id)) as IVerAnime
      return animeVer
    }
  }
}
