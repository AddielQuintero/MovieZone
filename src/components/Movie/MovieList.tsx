import { Typography } from '@material-tailwind/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MovieCard, LinkButton, MovieListSkeleton } from '@components'
import { MovieListProps } from '@types'
import 'swiper/swiper-bundle.min.css'
import { useLocalStorage } from '@hooks'
import { useTranslation } from 'react-i18next'

export const MovieList = ({ title, redirect, movies, loading }: MovieListProps) => {
  const { isFavorite, handleFavorite } = useLocalStorage()
  const [t] = useTranslation('global')
  const isEmpty = title === t('lang.similarMovies') ? t('lang.noSimilar') : t('lang.noMovies')

  return (
    <section className="movie__list ">
      <div className="flex justify-between items-center mb-2">
        <Typography variant="h3" className="mr-2 cursor-pointer py-1.5 font-bold text-pink-400 dark:text-pink-300 md:text-[27px]">
          {title}
        </Typography>
        {redirect && (
          <LinkButton
            className="flex items-center gap-1  py-2 px-4 text-pink-400 dark:text-pink-300 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg border border-pink-400  dark:border-pink-300 hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]"
            classTypography="font-bold text-xs"
            title={`${t('lang.seeMore')}`}
            redirect={`/movies/${redirect}`}
          />
        )}
      </div>

      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {loading && <MovieListSkeleton value={10} />}
        {movies.map(
          (movie, index) =>
            (movie.backdrop_path || movie.poster_path) && (
              <SwiperSlide className="w-[43%] sm:w-[30%] lg:w-[23%] xl:w-[18%]" key={index}>
                <MovieCard
                  id={movie.id}
                  bg={movie.poster_path ? movie.poster_path : movie.backdrop_path}
                  title={movie.title}
                  favorite={isFavorite(movie.id)}
                  handleFavorite={() => handleFavorite(movie.id, movie.title, movie.poster_path)}
                  className="test bg-inherit relative grid w-full h-full rounded-none items-end"
                  classHeader={`relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-cover`}
                  classFooter="flex items-start justify-between w-full py-2 px-1 gap-2"
                  classTypography="text-sm dark:text-gray-200"
                  classButton="h-5 w-5"
                  classIcon="h-5 w-5 text-indigo-500 dark:text-gray-200"
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
      {!movies.length && !loading && (
        <div className="flex justify-center items-start flex-wrap mt-10">
          <div className="p-4 rounded-md bg-gray-300 dark:bg-slate-700/95 text-pink-400 dark:text-gray-200 text-center">
            <h1>{isEmpty}</h1>
          </div>
        </div>
      )}
    </section>
  )
}
