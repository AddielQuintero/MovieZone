import { HomeHeroSkeleton, MovieDetail, MovieList } from '@components'
import { TStore } from '@types'
import { useParams } from 'react-router-dom'
import { NotFound } from '@pages'
import { useEffect } from 'react'
import { tmdbService } from '@services'
import { setDetailMovies, setSimilarMovies, useAppDispatch } from '@redux'
import { useSelector } from 'react-redux'

export const MovieDetailPage = () => {
  const { id } = useParams()
  const movie = useSelector((state: TStore) => state.data.detailMovie)
  const similar = useSelector((state: TStore) => state.data.similar)
  const isMovieEmpty = Object.keys(movie).length === 0

  const dispatch = useAppDispatch()

  if (!movie || !id) return <NotFound />

  useEffect(() => {
    const fetch = async () => {
      const detailMovie = await tmdbService.getDetailMovies(+id)
      const similarMovie = await tmdbService.getSimilarMovies(+id)
      detailMovie.success && dispatch(setDetailMovies(detailMovie.movies))
      similarMovie.success && dispatch(setSimilarMovies(similarMovie.movies))
    }

    fetch()

    return () => {
      dispatch(setDetailMovies({}))
      dispatch(setSimilarMovies([]))
    }
  }, [id])

  return (
    <div className="gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
      {isMovieEmpty ? <HomeHeroSkeleton /> : <MovieDetail detailMovie={movie} />}
      <MovieList title="Similar Movies" movies={similar} />
    </div>
  )
}
