import { IconicButton, LinkButton, MovieBackgroundImage, MovieInfo } from '@components'
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import { MovieProps } from '@types'

export const HomeHero = ({ movie }: MovieProps) => {
  return (
    <div className="home__hero flex items-center h-[calc(100vh-50px)] pt-12 pb-64 px-5 sm:px-10 md:px-12 xl:px-24 2xl:px-48">
      <MovieBackgroundImage
        url={movie.linkImg}
        classImage="object-cover"
        className="BackgroundImage absolute top-0 left-0 inset-0 -z-10 h-full w-full "
      />
      {/* <MovieBackgroundImage url={item.linkImg} className="absolute top-0 left-0 inset-0 -z-10 h-[65vh] sm:h-[69vh] lg:h-[70vh]" /> */}

      <div className="relative max-w-2xl ">
        <div className="sm:mb-8 flex">
          <MovieInfo start={movie.start} time={movie.time} className="text-gray-800 font-bold" />
        </div>
        <div className="mt-2">
          <Typography className="text-3xl font-bold tracking-tight text-gray-800 md:text-5xl" variant="h3">
            {movie.title}
          </Typography>
          <Typography className="hidden sm:block pt-4 text-lg leading-8 text-gray-800" variant="paragraph">
            {movie.description}
          </Typography>
          <div className="pt-3 sm:pt-6 flex items-center gap-x-6">
            <div className="py-4">
              <IconicButton
                className="flex items-center gap-3 px-4 py-1.5 sm:py-2"
                classIcon="h-5 w-5"
                color="indigo"
                IconComponent={PlayIcon}
                name="Play Trailer"
              />
            </div>
            <LinkButton
              className="flex items-center gap-3 px-4 py-[.57rem] sm:py-2 font-bold text-xs align-middle select-none font-sans  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg bg-blue-gray-500 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              classIcon="h-5 w-5"
              classTypography="hidden sm:block font-bold"
              title="Detail"
              redirect={`/movies/category/${movie.id}`}
              IconComponent={InformationCircleIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
