import { NotFound } from '@pages'
import { MovieGrid } from '@components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { tmdbService } from '@services'
import { setLoading, setPopularMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'
import { shallowEqual, useSelector } from 'react-redux'
import { TMovie, TSelectors, TStore } from '@types'

export const MovieGridPage = () => {
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const dispatch = useAppDispatch()
  const { category } = useParams<{ category: string }>()

  if (!category) return <NotFound />

  const selectors: TSelectors = {
    trending: useSelector((state: TStore) => state.data.trending, shallowEqual),
    popular: useSelector((state: TStore) => state.data.popular, shallowEqual),
    upcoming: useSelector((state: TStore) => state.data.upcoming, shallowEqual),
  }

  const movies: TMovie[] = selectors[category as keyof TSelectors] || []

  const fetch = async () => {
    let response = { success: false, movies: [] }
    switch (category) {
      case 'trending':
        response = await tmdbService.getTrendingMovies()
        response.success && dispatch(setTrendingMovies(response.movies))
        break
      case 'popular':
        response = await tmdbService.getListMovies('popular')
        response.success && dispatch(setPopularMovies(response.movies))
        break
      case 'upcoming':
        response = await tmdbService.getListMovies('upcoming')
        response.success && dispatch(setUpcomingMovies(response.movies))
        break
    }
    dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fetch()
  }, [category])

  return (
    <>
      <MovieGrid category={category} movies={movies} loading={loading} />
    </>
  )
}
