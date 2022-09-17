import { typeAxios, endPointsUrlFenix } from '../../api'
import { IInfoAnime, IlistadoEpisodio, IVerAnime } from '../../types'
import { UserInputError } from 'apollo-server'

const { infoAnime, verAnime } = endPointsUrlFenix

export const resolvers = {
  Query: {
    allInfoAnime: async (_: any, { idName, limitEpisode }: {idName: string, limitEpisode: number | undefined}) => {
      const infoAnimes = await typeAxios(infoAnime(idName)) as IInfoAnime
      const { listadoEpisodios } = infoAnimes
      if (limitEpisode) {
        if (limitEpisode > listadoEpisodios.length || limitEpisode < 0) {
          throw new UserInputError(
            `No se puede mostrar mas de ${listadoEpisodios.length} episodios o menos de 0`,
            {
              argumentName: 'limitEpisode'
            }
          )
        }
        return {
          ...infoAnimes,
          listadoEpisodios: listadoEpisodios.slice(0, limitEpisode)
        }
      }
      return infoAnimes
    }
  },
  listadoEpisodio: {
    linkId: ({ links }: IlistadoEpisodio) => {
      return links.split('/').at(-1)
    },
    verEpisodio: async ({ links }: IlistadoEpisodio) => {
      const linkId = links.split('/').at(-1) as string
      const animeVer = await typeAxios(verAnime(linkId)) as IVerAnime
      return animeVer
    }
  }
}
