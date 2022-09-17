import { typeAxios, endPointsUrlFenix } from '../../api'
import { IVerAnime, Next } from '../../types'

const { verAnime } = endPointsUrlFenix

export const resolvers = {
  Query: {
    allVerAnime: async (_: any, { id }: {id: string}) => {
      const verAnimes = await typeAxios(verAnime(id)) as IVerAnime
      return verAnimes
    },
    findServerVideoNameId: async (_: any, { id, serverName }: {id: string, serverName: string}): Promise<IVerAnime> => {
      const { Videos, name, controles } = await typeAxios(verAnime(id)) as IVerAnime
      const video = Videos.find((video) => video.serverName === serverName)
      if (video == null) {
        throw new Error(`No se encontro el servidor ${serverName} o el capitulo ${id} no tiene ese servidor`)
      }
      return {
        name,
        controles,
        Videos: [video]
      }
    }
  },
  objController: {
    linkID: ({ link }: Next) => {
      return link.split('/').at(-1)
    }
  }
}
