import { typeAxios, typeAxiosPost, endPointsUrlFenix } from '../../api'
import { IdownloadAnime } from '../../types'
import { UserInputError } from 'apollo-server'

const { downloadAnime } = endPointsUrlFenix

export const resolvers = {
  Query: {
    alldownloadAnime: async (_: any, { id }: { id: string }) => {
      const animeDownload = (await typeAxios(
        downloadAnime(id)
      )) as IdownloadAnime
      return animeDownload
    }
  },
  Mutation: {
    loginUserAnimeDownload: async (
      _: any,
      { id, ...args }: { id: string, username: string, password: string }
    ) => {
      if (args.username.length < 3 && args.password.length < 3) {
        throw new UserInputError('Coloque un username o contraseña valido', {
          invalidArgs: args
        })
      }
      const animeDownload = (await typeAxiosPost(
        downloadAnime(id),
        args
      )) as IdownloadAnime
      const { Dowload } = animeDownload
      if (Dowload.length === 0) {
        throw new UserInputError(
          'Coloque un username o contraseña valido, sino compruebe que el id sea el correcto (verificar si tiene el numero del capitulo a descargar)',
          { invalidArgs: args, invalidId: id }
        )
      }
      return animeDownload
    }
  }
}
