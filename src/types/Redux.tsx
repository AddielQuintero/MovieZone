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
  detailMovie: TMovieDetail
}

export const initialState = {
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
  detailMovie: {} as TMovieDetail,
}
