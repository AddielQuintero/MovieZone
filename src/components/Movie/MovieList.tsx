import { Typography } from '@material-tailwind/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MovieCard, LinkButton, MovieListSkeleton } from '@components'
import { MovieListProps } from '@types'
import 'swiper/swiper-bundle.min.css'

export const MovieList = ({ title, redirect, movies }: MovieListProps) => {
  return (
    <div className="movie__list ">
      <div className="flex justify-between items-center mb-2">
        <Typography variant="h3" className="mr-2 cursor-pointer py-1.5 font-bold text-pink-400">
          {title}
        </Typography>
        {redirect && (
          <LinkButton
            className="flex items-center gap-1  py-2 px-4 text-pink-400 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg border border-pink-500  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]"
            classTypography="font-bold text-xs"
            title="See More"
            redirect={`/movies/${redirect}`}
          />
        )}
      </div>

      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {!movies.length ? (
          <MovieListSkeleton value={10} />
        ) : (
          movies.map(
            (movie, index) =>
              (movie.backdrop_path || movie.poster_path) && (
                <SwiperSlide className="w-[43%] sm:w-[30%] lg:w-[23%] xl:w-[18%]" key={index}>
                  <MovieCard
                    id={movie.id}
                    bg={movie.poster_path ? movie.poster_path : movie.backdrop_path}
                    title={movie.title}
                    className="test bg-inherit relative grid w-full h-full rounded-none items-end"
                    classHeader={`relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-cover`}
                    classFooter="flex items-start justify-between w-full py-2 px-1 gap-2"
                    classTypography="text-sm"
                    classButton="h-5 w-5"
                    classIcon="h-5 w-5 text-indigo-500"

                  />
                </SwiperSlide>
              )
          )
        )}
      </Swiper>
    </div>
  )
}
