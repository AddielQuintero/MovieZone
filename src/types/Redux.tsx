import { TMovieDetail, TGenre, TMovie } from '@types'

export interface TStore {
  data: {
    isLoader: boolean
    trending: TMovie[]
    popular: TMovie[]
    upcoming: TMovie[]
    genre: TGenre[]
    topRated: TMovie[]
    nowPlaying: TMovie[]
    similar: TMovie[]
    byGenres: TMovie[]
    bySearch: TMovie[]
    favorites: TMovie[]
    detailMovie: TMovieDetail
  }
}

export interface State {
  isLoader: boolean
  trending: TMovie[]
  popular: TMovie[]
  upcoming: TMovie[]
  genre: TGenre[]
  topRated: TMovie[]
  nowPlaying: TMovie[]
  similar: TMovie[]
  byGenres: TMovie[]
  bySearch: TMovie[]
  favorites: TMovie[]
  detailMovie: TMovieDetail
}

export const initialState: State = {
  isLoader: true,
  trending: [],
  popular: [],
  upcoming: [],
  genre: [],
  topRated: [],
  nowPlaying: [],
  similar: [],
  byGenres: [],
  bySearch: [],
  favorites: [],
  detailMovie: {} as TMovieDetail,
}

export type TSetFavorite = { type: 'data/setFavoritesMovies'; payload: TMovie[] }
export type TToggleFavorite = { type: 'data/toggleFavorite'; payload: TMovie }
export type TIsLoader = { type: 'data/setLoading'; payload: boolean }

export type Action = TSetFavorite | TToggleFavorite | TIsLoader
