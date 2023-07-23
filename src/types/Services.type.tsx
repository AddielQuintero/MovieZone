import { AxiosRequestConfig  } from 'axios'
import { TMovie } from '@types'

export interface TResponse {
  success: boolean
  movies: TMovieResponse
}

export interface TMovieResponse {
  page: number
  results: TMovie[]
  total_pages: number
  total_results: number
}

export interface TMovieType {
  upcoming: string
  popular: string
  top_rated: string
  now_playing: string
  trending: string
}

export const MovieType: TMovieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing: 'now_playing',
  trending: 'week',
}

export interface ParamsProps extends AxiosRequestConfig  {
  page?: number
  query?: string | null
  language: string
}
