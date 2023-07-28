import { shallowEqual, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MovieGrid } from '@components'
import { tmdbService } from '@services'
import { NotFound } from '@pages'
import { useQueryParams } from '@hooks'
import { TMovie, TSelectors, TStore, TResponse, TMovieResponse, ParamsProps } from '@types'
import { clearMovies, setBySearchMovies, setLoading, setPopularMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'

export const MovieGridPage = () => {
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const { category, keyword } = useQueryParams()
  const pageRef = useRef(1)
  const dispatch = useAppDispatch()
  const [t] = useTranslation('global')

  if (!category && !keyword) return <NotFound />

  const selectors: TSelectors = {
    trending: useSelector((state: TStore) => state.data.trending),
    popular: useSelector((state: TStore) => state.data.popular, shallowEqual),
    upcoming: useSelector((state: TStore) => state.data.upcoming, shallowEqual),
    favorites: useSelector((state: TStore) => state.data.favorites, shallowEqual),
    bySearch: useSelector((state: TStore) => state.data.bySearch, shallowEqual),
  }

  const movies: TMovie[] = selectors[category as keyof TSelectors] || selectors.bySearch

  const fetch = async () => {
    let response: TResponse = { success: false, movies: {} as TMovieResponse }
    const params: ParamsProps = {
      page: pageRef.current,
      query: keyword,
      language: `${t('lang.langAPI')}`,
    }

    if (keyword === undefined) {
      switch (category) {
        case 'trending':
          response = await tmdbService.getTrendingMovies(params)
          response.success && dispatch(setTrendingMovies(response.movies.results))
          break
        case 'popular':
          response = await tmdbService.getListMovies('popular', params)
          response.success && dispatch(setPopularMovies(response.movies.results))
          break
        case 'upcoming':
          response = await tmdbService.getListMovies('upcoming', params)
          response.success && dispatch(setUpcomingMovies(response.movies.results))
          break
      }
    } else {
      response = await tmdbService.getMoviesBySearch(params)
      response.success && dispatch(setBySearchMovies(response.movies.results))
    }

    setHasMore(response.movies.page < response.movies.total_pages)
    dispatch(setLoading(false))
  }

  // const fetch = async () => {
  //   let response: TResponse = { success: false, movies: {} as TMovieResponse }
  //   const params: ParamsProps = {
  //     page: pageRef.current,
  //     query: keyword,
  //   }

  //   const categoryHandlers: TCategoryHandlers = {
  //     trending: {
  //       fetchData: () => tmdbService.getTrendingMovies(params),
  //       dispatchData: (response) => response.success && dispatch(setTrendingMovies(response.movies.results)),
  //     },
  //     popular: {
  //       fetchData: () => tmdbService.getListMovies('popular', params),
  //       dispatchData: (response) => response.success && dispatch(setPopularMovies(response.movies.results)),
  //     },
  //     upcoming: {
  //       fetchData: () => tmdbService.getListMovies('upcoming', params),
  //       dispatchData: (response) => response.success && dispatch(setUpcomingMovies(response.movies.results)),
  //     },
  //     bySearch: {
  //       fetchData: () => tmdbService.getMoviesBySearch(params),
  //       dispatchData: (response) => response.success && dispatch(setBySearchMovies(response.movies.results)),
  //     },
  //   }

  //   if(keyword === null){
  //     if(category && category in categoryHandlers){
  //       const categoryHandler =  categoryHandlers[category]
  //       response = await categoryHandler.fetchData()
  //       categoryHandler.dispatchData(response)
  //     }
  //   }else {
  //     response = await categoryHandlers.bySearch.fetchData()
  //     categoryHandlers.bySearch.dispatchData(response)
  //   }

  //   setHasMore(response.movies.page < response.movies.total_pages)
  //   dispatch(setLoading(false))
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    pageRef.current = 1
    dispatch(clearMovies())
    dispatch(setLoading(true))
  }, [category, keyword, t])

  useEffect(() => {
    fetch()
  }, [category, keyword, page, t])

  const handleSetPage = () => {
    pageRef.current += 1
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      <MovieGrid
        category={category}
        keyword={keyword}
        movies={movies}
        loading={loading}
        handleSetPage={handleSetPage}
        hasMore={hasMore}
      />
    </>
  )
}
