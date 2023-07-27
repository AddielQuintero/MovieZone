import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setGenreMovies, setLoading, setPopularMovies, setTopRatedMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'
import { MovieList, HomeSlider, MovieGenres, MoviePremier, UpButton } from '@components'
import { tmdbService } from '@services'
import { ParamsProps, TStore } from '@types'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const topRated = useSelector((state: TStore) => state.data.topRated)
  const trending = useSelector((state: TStore) => state.data.trending)
  const popular = useSelector((state: TStore) => state.data.popular)
  const upcoming = useSelector((state: TStore) => state.data.upcoming)
  const genres = useSelector((state: TStore) => state.data.genre)
  const dispatch = useAppDispatch()
  const [t] = useTranslation('global')

  const fetch = async () => {
    const params: ParamsProps = {
      language: `${t('lang.langAPI')}`,
    }
    const topRatedFetch = await tmdbService.getListMovies('top_rated', params)
    const trendingFetch = await tmdbService.getTrendingMovies(params)
    const popularFetch = await tmdbService.getListMovies('popular', params)
    const upcomingFetch = await tmdbService.getListMovies('upcoming', params)
    const genreFetch = await tmdbService.getGenreMovies(params)
    topRatedFetch.success && dispatch(setTopRatedMovies(topRatedFetch.movies.results.slice(0, 4)))
    trendingFetch.success && dispatch(setTrendingMovies(trendingFetch.movies.results.slice(0, 10)))
    popularFetch.success && dispatch(setPopularMovies(popularFetch.movies.results.slice(0, 10)))
    upcomingFetch.success && dispatch(setUpcomingMovies(upcomingFetch.movies.results.slice(0, 10)))
    genreFetch.success && dispatch(setGenreMovies(genreFetch.movies))
    dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    fetch()

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [t])

  return (
    <>
      <HomeSlider t={t} />
      <section className="dark:bg-slate-950 movie flex flex-col gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto pt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
        <main className="movie__main flex flex-col gap-y-8 w-full lg:w-[73%] xl:w-[78%] 2xl:w-[83%] ">
          <MovieList title={`${t('lang.trending')}`} redirect="trending" movies={trending} loading={loading}/>
          <MovieList title={`${t('lang.popular')}`} redirect="popular" movies={popular} loading={loading} />
          <MovieList title={`${t('lang.upcoming')}`} redirect="upcoming" movies={upcoming} loading={loading}/>
        </main>
        <aside className="movie__aside w-full lg:w-[22%] xl:w-[19%] 2xl:w-[17%] ">
          <MovieGenres
            className="genres__home"
            classListGenres="flex flex-wrap gap-3"
            classTypography="mb-2 py-1.5 font-bold text-pink-400 dark:text-pink-300 md:text-[27px]"
            classChip="bg-blue-gray-800  cursor-pointer"
            classSkeleton="flex flex-wrap gap-4"
            classItemSkeleton="genres__home-skeleton w-[5.5rem] sm:w-24  h-8 bg-gray-300 dark:bg-slate-700/95 rounded"
            loading={loading}
            genres={genres}
            variant="h3"
            value={20}
            redirect
            title
            t={t}
          />
          <MoviePremier
            ratedMovie={topRated}
            classTypography="mb-2 py-1.5 font-bold text-pink-400 md:text-[27px]"
            variant="h3"
            t={t}
          />
        </aside>
      </section>
      <UpButton />
    </>
  )
}
