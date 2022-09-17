// * Interfaz par alos edmpoints de la API
export interface IEndPointsUrlFenix {
  home: string
  verAnime: (id: string) => string
  infoAnime: (idName: string) => string
  searchAnime: (name: string) => string
  downloadAnime: (id: string) => string
}

// * Interfaz para el Home de Anime
export interface IAnimeHome {
  id: string
  idNameInfo: string
  title: string
  image: string
  episode: string
}

// * Interfaz para ver el Anime
export interface IVerAnime {
  name: string
  controles: {
    prev: Next
    next: Next
  }
  Videos: video[]
}
export interface Next {
  existe: boolean
  link: string
}
export interface video {
  serverName: string
  url: string
}

// * Interfaz para la info del Anime
export interface IInfoAnime {
  status: boolean
  title: string
  imagen: string
  genero: string[]
  episodios: string
  estado: string
  tipo: string
  proxEpsiodio: string
  sipnosis: string
  listadoEpisodios: IlistadoEpisodio[]
}

export interface IlistadoEpisodio {
  name: string
  links: string
}

// * Interfaz para la busqueda del Anime
export interface IsearchAnime {
  status: boolean
  result: string
  SizeSearch: number
  data: IdataSearchAnime[]
}
export interface IdataSearchAnime {
  id: string
  info: string
  name: string
  description: string
  image: string
}

// * Interfaz para la descarga del Anime
export interface IdownloadAnime {
  Title: string
  Dowload: IdownloadObj[]
}
export interface IdownloadObj {
  link: string
  serverName: string
}
