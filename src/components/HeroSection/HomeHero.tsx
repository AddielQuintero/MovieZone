import { IconicButton, LinkButton, MovieBackgroundImage, MovieFavorite, MovieInfo } from '@components'
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import { CONFIG } from '@config'
import { MovieProps } from '@types'

export const HomeHero = ({ movies, favorite, t, handleFavorite }: MovieProps) => {
  const background = CONFIG.originalImage(movies.backdrop_path)
  const formattedDate = movies.release_date.slice(0, 4)

  return (
    <div className="home__hero flex items-center h-[calc(100vh-50px)] min-h-[620px] pt-12 pb-64 px-5 sm:px-10 md:px-12 xl:px-24 2xl:px-48">
      <MovieBackgroundImage
        url={background}
        classImage="object-cover"
        className="BackgroundImage absolute top-0 left-0 inset-0 -z-10 h-full w-full "
      />

      <div className="relative max-w-2xl ">
        <div className="sm:mb-8 flex">
          <MovieInfo average={movies.vote_average} date={formattedDate} className="text-gray-800 dark:text-gray-200 font-bold">
            <MovieFavorite
              handleFavorite={handleFavorite}
              favorite={favorite}
              classButton="h-5 w-5"
              classIcon="h-5 w-5 text-indigo-500 dark:text-gray-200"
            />
          </MovieInfo>
        </div>
        <div className="mt-2">
          <Typography className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 md:text-5xl" variant="h3">
            {movies.title}
          </Typography>
          <Typography
            className="pt-4 text-lg leading-8 hidden sm:line-clamp-3 text-gray-800 dark:text-gray-200 max-w-[25rem]"
            variant="paragraph"
          >
            {movies.overview}
          </Typography>
          <div className="pt-3 sm:pt-6 flex items-center gap-x-6">
            <div className="py-4">
              <IconicButton
                className="flex items-center gap-3 px-4 py-1.5 sm:py-2"
                classIcon="h-5 w-5"
                color="indigo"
                IconComponent={PlayIcon}
                name={`${t('lang.playTrailer')}`}
              />
            </div>
            <LinkButton
              className="flex items-center gap-3 px-4 py-[.57rem] sm:py-2 font-bold text-xs align-middle select-none font-sans  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg bg-blue-gray-500 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              classIcon="h-5 w-5"
              classTypography="hidden sm:block font-bold"
              title={`${t('lang.details')}`}
              redirect={`/movie/${movies.id}`}
              IconComponent={InformationCircleIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
