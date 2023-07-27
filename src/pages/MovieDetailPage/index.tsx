import { HomeHeroSkeleton, MovieDetail, MovieList } from '@components'
import { ParamsProps, TStore } from '@types'
import { useParams } from 'react-router-dom'
import { NotFound } from '@pages'
import { useEffect } from 'react'
import { tmdbService } from '@services'
import { setDetailMovies, setLoading, setSimilarMovies, useAppDispatch } from '@redux'
import { shallowEqual, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export const MovieDetailPage = () => {
  const { id } = useParams()
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const movie = useSelector((state: TStore) => state.data.detailMovie)
  const similar = useSelector((state: TStore) => state.data.similar)
  const isMovieEmpty = Object.keys(movie).length === 0
  const [t] = useTranslation('global')

  const dispatch = useAppDispatch()

  if (!movie || !id) return <NotFound />

  const fetch = async () => {
    const params: ParamsProps = {
      language: `${t('lang.langAPI')}`,
    }
    const detailMovie = await tmdbService.getDetailMovies(+id, params)
    const similarMovie = await tmdbService.getSimilarMovies(+id, params)
    detailMovie.success && dispatch(setDetailMovies(detailMovie.movies))
    similarMovie.success && dispatch(setSimilarMovies(similarMovie.movies))
    dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fetch()
    return () => {
      dispatch(setDetailMovies({}))
      dispatch(setSimilarMovies([]))
    }
  }, [id, t])

  return (
    <div className="gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
      {loading ? (
        <HomeHeroSkeleton />
      ) : isMovieEmpty && !loading ? (
        <div className="flex justify-center items-start flex-wrap mt-10">
          <div className="p-4 rounded-md bg-gray-300 dark:bg-slate-700/95 text-pink-400 dark:text-gray-200 text-center">
            <h1>{t('lang.noExist')}</h1>
          </div>
        </div>
      ) : (
        <MovieDetail loading={loading} detailMovie={movie} t={t} />
      )}
      <MovieList title={`${t('lang.similarMovies')}`} movies={similar} loading={loading} />
    </div>
  )
}
