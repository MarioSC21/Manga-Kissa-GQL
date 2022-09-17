import axios from 'axios'
import config from '../config'
import { IEndPointsUrlFenix } from '../types'

export const urlFenix = config.urlFenix

export const endPointsUrlFenix: IEndPointsUrlFenix = {
  home: `${urlFenix}/home`,
  verAnime: (id) => `${urlFenix}/ver/${id}`,
  infoAnime: (idName) => `${urlFenix}/info/${idName}`,
  searchAnime: (name) => `${urlFenix}/search?q=${name}`,
  downloadAnime: (id) => `${urlFenix}/download/${id}`
}

export const typeAxios = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

export const typeAxiosPost = async (url: string, content: object) => {
  console.log(url, content)
  const { data } = await axios.post(url, content)
  console.log(data)
  return data
}
