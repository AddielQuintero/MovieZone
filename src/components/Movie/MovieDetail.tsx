import { Typography } from '@material-tailwind/react'
import { PlayIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { LinkButton, MovieCategories, MovieImage, MovieInfo, IconicButton } from '@components'
import { MovieProps } from '@types'

export const MovieDetail = ({ movie }: MovieProps) => {
  console.log('🚀  movieMovieDetail:', movie)

  return (
    <div className="movie__detail grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 max-w-[992px] mx-auto py-10 md:py-20">
      <MovieImage url={movie.linkImg} />

      <div className="summary flex flex-col h-full col-span-2">
        <div className="hidden md:flex justify-end pb-10">
          <LinkButton
            className="flex items-center gap-1 text-pink-400 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-4 rounded-lg border border-pink-500  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] "
            classIcon="h-5 w-5 inline"
            classTypography="font-bold text-xs"
            title="Go Back"
            redirect="/"
            IconComponent={ArrowLongLeftIcon}
          />
        </div>
        <MovieInfo start={movie.start} time={movie.time} />

        <div className="my-2">
          <Typography className="" variant="h4">
            {movie.title}
          </Typography>
          <Typography className="mt-4" variant="paragraph">
            {movie.description}
          </Typography>
        </div>

        <div className="py-4">
          <IconicButton
            className="flex items-center gap-3 px-4 py-1.5 sm:py-2"
            classIcon="h-5 w-5"
            color="indigo"
            IconComponent={PlayIcon}
            name="Play Trailer"
          />
        </div>

        <MovieCategories categories={movie.categories} />
      </div>
    </div>
  )
}
