import axios from 'axios'
import { CONFIG } from '@config'

export const tmdbService = {
  getTrendingMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/trending/movie/week?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results.slice(0, 10) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getPopularMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/popular?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results.slice(0, 10) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getUpcomingMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/upcoming?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results.slice(0, 10) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getDetailMovies: async (id: number) => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/${id}?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getTopRatedMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/top_rated?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results.slice(0, 4) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getGenreMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/genre/movie/list?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.genres }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getNowPlayingMovies: async () => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/now_playing?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results.slice(1, 7) }
    } catch {
      return { success: false, movies: [] }
    }
  },

  getSimilarMovies: async (id: number) => {
    try {
      const reply = await axios.get(`${CONFIG.API_BASE}/movie/${id}/similar?api_key=${CONFIG.API_KEY}`)
      return { success: true, movies: reply.data.results }
    } catch {
      return { success: false, movies: [] }
    }
  },
}
