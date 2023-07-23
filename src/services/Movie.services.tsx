import { MovieType, TMovieType, ParamsProps, TResponse, TMovieResponse } from '@types'
import { axiosClient } from '@config'

export const tmdbService = {
  getTrendingMovies: async (params?: ParamsProps): Promise<TResponse> => {
    try {
      const response = await axiosClient(`/trending/movie/week`, { params })
      return { success: true, movies: response.data }
    } catch {
      return { success: false, movies: {} as TMovieResponse }
    }
  },

  getListMovies: async (type: keyof TMovieType, params?: ParamsProps): Promise<TResponse> => {
    try {
      const response = await axiosClient(`/movie/${MovieType[type]}`, { params })
      return { success: true, movies: response.data }
    } catch {
      return { success: false, movies: {} as TMovieResponse }
    }
  },

  getDetailMovies: async (id: number, params?: ParamsProps) => {
    try {
      const response = await axiosClient(`/movie/${id}`, { params })
      return { success: true, movies: response.data }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getGenreMovies: async (params?: ParamsProps) => {
    try {
      const response = await axiosClient(`/genre/movie/list`, { params })
      return { success: true, movies: response.data.genres }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getSimilarMovies: async (id: number, params?: ParamsProps) => {
    try {
      const response = await axiosClient(`/movie/${id}/similar`, { params })
      return { success: true, movies: response.data.results }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getMoviesByGenre: async (params?: ParamsProps): Promise<TResponse> => {
    try {
      const response = await axiosClient(`discover/movie`, { params })
      return { success: true, movies: response.data }
    } catch {
      return { success: false, movies: {} as TMovieResponse }
    }
  },

  getMoviesBySearch: async (params: ParamsProps): Promise<TResponse> => {
    try {
      const response = await axiosClient(`search/movie`, { params })
      return { success: true, movies: response.data }
    } catch {
      return { success: false, movies: {} as TMovieResponse }
    }
  },
}
