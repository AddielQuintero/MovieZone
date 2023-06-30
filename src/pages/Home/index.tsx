import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setGenreMovies, setPopularMovies, setTopRatedMovies, setTrendingMovies, setUpcomingMovies, useAppDispatch } from '@redux'
import { MovieList, HomeSlider, MovieGenres, MoviePremier } from '@components'
import { tmdbService } from '@services'
import { TStore } from '@types'

export const Home = () => {
  const topRated = useSelector((state: TStore) => state.data.topRated)
  const trending = useSelector((state: TStore) => state.data.trending)
  const popular = useSelector((state: TStore) => state.data.popular)
  const upcoming = useSelector((state: TStore) => state.data.upcoming)
  const genres = useSelector((state: TStore) => state.data.genre)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetch = async () => {
      const topRatedFetch = await tmdbService.getTopRatedMovies()
      const trendingFetch = await tmdbService.getTrendingMovies()
      const popularFetch = await tmdbService.getPopularMovies()
      const upcomingFetch = await tmdbService.getUpcomingMovies()
      const genreFetch = await tmdbService.getGenreMovies()
      topRatedFetch.success && dispatch(setTopRatedMovies(topRatedFetch.movies))
      trendingFetch.success && dispatch(setTrendingMovies(trendingFetch.movies))
      popularFetch.success && dispatch(setPopularMovies(popularFetch.movies))
      upcomingFetch.success && dispatch(setUpcomingMovies(upcomingFetch.movies))
      genreFetch.success && dispatch(setGenreMovies(genreFetch.movies))
    }

    fetch()
  }, [])

  return (
    <>
      <HomeSlider />
      <section className="movie flex flex-col gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
        <main className="movie__main flex flex-col gap-y-8 w-full lg:w-[73%] xl:w-[79%] 2xl:w-[83%] ">
          <MovieList title="Trending" redirect="trending" movies={trending} />
          <MovieList title="Popular" redirect="popular" movies={popular} />
          <MovieList title="Upcoming" redirect="upcoming" movies={upcoming} />
        </main>
        <aside className="movie__aside w-full lg:w-[22%] xl:w-[19%] 2xl:w-[17%] ">
          <MovieGenres
            className="genres"
            classTypography="mb-2 py-1.5 font-bold text-pink-400"
            variant="h3"
            classListGenres="flex flex-wrap gap-3"
            genres={genres}
          />
          <MoviePremier
            ratedMovie={topRated}
            classTypography="mb-2 py-1.5 font-bold text-pink-400"
            variant="h3"
          />
        </aside>
      </section>
    </>
  )
}
