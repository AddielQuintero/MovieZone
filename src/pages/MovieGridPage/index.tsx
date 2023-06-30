import { NotFound } from '@pages'
import { MovieGrid } from '@components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { tmdbService } from '@services'
import { TMovie } from '@types'
import { setPopularMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'

export const MovieGridPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([])
  const dispatch = useAppDispatch()

  const { category } = useParams()

  if (!category) return <NotFound />

  const fetch = async () => {
    let response = { success: false, movies: [] }
    if (category !== 'similar') {
      switch (category) {
        case 'trending':
          response = await tmdbService.getTrendingMovies()
          response.success && dispatch(setTrendingMovies(response.movies))
          break
        case 'popular':
          response = await tmdbService.getPopularMovies()
          response.success && dispatch(setPopularMovies(response.movies))
          break
        case 'upcoming':
          response = await tmdbService.getUpcomingMovies()
          response.success && dispatch(setUpcomingMovies(response.movies))
          break
      }
    } else {
      setMovies(response.movies)
    }

    setMovies(response.movies)
  }

  useEffect(() => {
    fetch()
  }, [category])

  return <MovieGrid category={category} movies={movies} />
}
