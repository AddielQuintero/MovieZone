import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { MovieCard, MovieCardSkeleton } from '@components'
import { MovieGridProps } from '@types'

export const MovieGrid = ({ category, movies }: MovieGridProps) => {
  return (
    <section className="movie__grid gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
      <div className="flex justify-between items-center mb-2">
        <Typography variant="h3" className="mr-2 cursor-pointer py-1.5 font-bold text-pink-400 capitalize   ">
          {category}
        </Typography>
        <Link
          to="/"
          className="flex items-center gap-1 text-pink-400 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-4 rounded-lg border border-pink-500  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] "
        >
          <ArrowLongLeftIcon className="h-5 w-5 inline" />
          <Typography className="font-bold text-xs ">Go back</Typography>
        </Link>
      </div>

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-6 ">
          {!movies.length ? (
            <MovieCardSkeleton value={20} />
          ) : (
            movies.map((movie, index) => (
              <MovieCard
                key={index}
                id={movie.id}
                bg={movie.poster_path}
                title={movie.title}
                className="test bg-inherit relative grid auto-rows-min w-full h-full rounded-none items-start overflow-hidden"
                classHeader="relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-cover"
                classTypography="text-sm"
                classFooter="flex items-start gap-2 justify-between w-full p-2"
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
