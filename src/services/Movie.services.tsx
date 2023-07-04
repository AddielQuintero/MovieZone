import { MovieType, TMovieType } from '@types'
import { axiosClient } from '@services'

export const tmdbService = {
  getListMovies: async (type: keyof TMovieType, sliceStart?: number, sliceEnd?: number) => {
    try {
      const reply = await axiosClient(`/movie/${MovieType[type]}`)
      return { success: true, movies: reply.data.results.slice(sliceStart, sliceEnd) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getTrendingMovies: async (sliceStart?: number, sliceEnd?: number) => {
    try {
      const reply = await axiosClient(`/trending/movie/week`)
      return { success: true, movies: reply.data.results.slice(sliceStart, sliceEnd) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getDetailMovies: async (id: number) => {
    try {
      const reply = await axiosClient(`/movie/${id}`)
      return { success: true, movies: reply.data }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getGenreMovies: async () => {
    try {
      const reply = await axiosClient(`/genre/movie/list`)
      return { success: true, movies: reply.data.genres }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getSimilarMovies: async (id: number) => {
    try {
      const reply = await axiosClient(`/movie/${id}/similar`)
      return { success: true, movies: reply.data.results }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getMoviesByGenre: async (id: string) => {
    console.log('🚀  idService:', id)
    try {
      const reply = await axiosClient(`discover/movie`, { params: { with_genres: id } })
      return { success: true, movies: reply.data.results }
    } catch {
      return { success: false, movies: [] }
    }
  },

  // getPopularMovies: async () => {
  //   try {
  //     const reply = await axiosClient(`/movie/popular`)
  //     return { success: true, movies: reply.data.results.slice(0, 10) }
  //   } catch {
  //     return { success: false, movies: [] }
  //   }
  // },

  // getUpcomingMovies: async () => {
  //   try {
  //     const reply = await axiosClient(`/movie/upcoming`)
  //     return { success: true, movies: reply.data.results.slice(0, 10) }
  //   } catch {
  //     return { success: false, movies: [] }
  //   }
  // },

  // getTopRatedMovies: async () => {
  //   try {
  //     const reply = await axiosClient(`/movie/top_rated`)
  //     return { success: true, movies: reply.data.results.slice(0, 4) }
  //   } catch {
  //     return { success: false, movies: [] }
  //   }
  // },

  // getNowPlayingMovies: async () => {
  //   try {
  //     const reply = await axiosClient(`/movie/now_playing`)
  //     return { success: true, movies: reply.data.results.slice(1, 7) }
  //   } catch {
  //     return { success: false, movies: [] }
  //   }
  // },
}
