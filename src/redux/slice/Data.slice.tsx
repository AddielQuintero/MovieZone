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
    setNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload
    },
    setSimilarMovies: (state, action) => {
      state.similar = action.payload
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
  setNowPlayingMovies,
  setSimilarMovies,
} = DataSlice.actions

export default DataSlice.reducer
