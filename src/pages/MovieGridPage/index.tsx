import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { MovieGrid } from '@components'
import { tmdbService } from '@services'
import { NotFound } from '@pages'
import { useQueryParams } from '@hooks'
import { TMovie, TSelectors, TStore } from '@types'
import { setBySearchMovies, setLoading, setPopularMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'

export const MovieGridPage = () => {
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const { category, keyword } = useQueryParams()
  const dispatch = useAppDispatch()
  
  if (!category && !keyword) return <NotFound />

  const selectors: TSelectors = {
    trending: useSelector((state: TStore) => state.data.trending, shallowEqual),
    popular: useSelector((state: TStore) => state.data.popular, shallowEqual),
    upcoming: useSelector((state: TStore) => state.data.upcoming, shallowEqual),
    favorites: useSelector((state: TStore) => state.data.favorites, shallowEqual),
    bySearch: useSelector((state: TStore) => state.data.bySearch, shallowEqual),
  }

  const movies: TMovie[] = selectors[category as keyof TSelectors] || selectors.bySearch

  const fetch = async () => {
    let response = { success: false, movies: [] }

    if (keyword === null) {
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
    } else {
      response = await tmdbService.getMoviesBySearch(keyword)
      response.success && dispatch(setBySearchMovies(response.movies))
    }

    dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fetch()
  }, [category, keyword])

  return (
    <>
      <MovieGrid category={category} keyword={keyword} movies={movies} loading={loading} />
    </>
  )
}
