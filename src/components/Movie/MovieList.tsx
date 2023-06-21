import { Typography } from '@material-tailwind/react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Scrollbar } from 'swiper'
import { MovieCard, LinkButton } from '@components'
import { MovieListProps } from '@types'
import 'swiper/swiper-bundle.min.css'

export const MovieList = ({title, redirect }: MovieListProps) => {
  return (
    <>
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
        <div>
          <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
            {Array(10)
              .fill({})
              .map((_, index) => (
                <SwiperSlide className="w-[43%] sm:w-[30%] md:w-[21%] lg:w-[18%] xl:w-[15%]" key={index}>
                  <MovieCard />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
