import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '@types'

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoader = action.payload
    },
    setTrendingMovies: (state, action) => {
      state.trending = action.payload
    },
    setPopularMovies: (state, action) => {
      state.popular = action.payload
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming = action.payload
    },
    setDetailMovies: (state, action) => {
      state.detailMovie = action.payload
    },
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload
    },
    setGenreMovies: (state, action) => {
      state.genre = action.payload
    },
    setByGenreMovies: (state, action) => {
      state.byGenres = action.payload
    },
    setBySearchMovies: (state, action) => {
      state.bySearch = action.payload
    },
    setNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload
    },
    setSimilarMovies: (state, action) => {
      state.similar = action.payload
    },
    setFavoritesMovies: (state, action) => {
      state.favorites = action.payload
    },
    toggleFavorite: (state, action) => {
      const favorite = state.favorites.some((favorite) => favorite.id === action.payload.id)
      const favorites = !favorite
        ? [...state.favorites, action.payload]
        : state.favorites.filter((favorite) => favorite.id !== action.payload.id)

      localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
      state.favorites = favorites
    },
  },
})

export const {
  setLoading,
  setTrendingMovies,
  setPopularMovies,
  setUpcomingMovies,
  setDetailMovies,
  setTopRatedMovies,
  setGenreMovies,
  setByGenreMovies,
  setBySearchMovies,
  setNowPlayingMovies,
  setSimilarMovies,
  setFavoritesMovies,
  toggleFavorite,
} = DataSlice.actions

export default DataSlice.reducer
