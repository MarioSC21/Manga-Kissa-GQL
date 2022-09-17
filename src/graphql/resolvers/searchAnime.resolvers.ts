import { typeAxios, endPointsUrlFenix } from '../../api'
import { IsearchAnime } from '../../types'
import { UserInputError } from 'apollo-server'

const { searchAnime } = endPointsUrlFenix

export const resolvers = {
  Query: {
    findTheSearchAnime: async (_: any, { name, limitDataSearch }: {name: string, limitDataSearch: number}) => {
      if (name.length < 2) {
        throw new UserInputError(
          'Escribe al menos 2 caracteres para realizar la busqueda',
          {
            argumentName: 'name'
          }
        )
      }
      const animeSearch = await typeAxios(searchAnime(name)) as IsearchAnime
      const { data } = animeSearch
      if (limitDataSearch) {
        if (limitDataSearch > data.length || limitDataSearch <= 0) {
          throw new UserInputError(
            `No se puede mostrar mas de ${data.length} resultados o menos de 0`,
            {
              argumentName: 'limitDataSearch'
            }
          )
        }
        const searchLimit = data.slice(0, limitDataSearch)
        return {
          ...animeSearch,
          data: searchLimit
        }
      }
      return animeSearch
    }
  },
  dataSearchAnime: {
    infoId: ({ id }: {id: string}) => {
      return id.split('/').at(-1)
    }
  }
}
