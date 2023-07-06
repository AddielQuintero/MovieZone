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

  const fetch = async () => {
    const topRatedFetch = await tmdbService.getListMovies('top_rated', 0, 4)
    const trendingFetch = await tmdbService.getTrendingMovies(0, 10)
    const popularFetch = await tmdbService.getListMovies('popular', 0, 10)
    const upcomingFetch = await tmdbService.getListMovies('upcoming', 0, 10)
    const genreFetch = await tmdbService.getGenreMovies()
    topRatedFetch.success && dispatch(setTopRatedMovies(topRatedFetch.movies))
    trendingFetch.success && dispatch(setTrendingMovies(trendingFetch.movies))
    popularFetch.success && dispatch(setPopularMovies(popularFetch.movies))
    upcomingFetch.success && dispatch(setUpcomingMovies(upcomingFetch.movies))
    genreFetch.success && dispatch(setGenreMovies(genreFetch.movies))
  }

  useEffect(() => {
    fetch()

    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            className="genres__home"
            classListGenres="flex flex-wrap gap-3"
            classTypography="mb-2 py-1.5 font-bold text-pink-400"
            classChip="bg-blue-gray-800 cursor-pointer"
            classSkeleton="flex flex-wrap gap-4"
            classItemSkeleton="genres__home-skeleton w-[5.5rem] sm:w-24  h-8 bg-gray-300 rounded"
            genres={genres}
            variant="h3"
            value={20}
            redirect
            title
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
