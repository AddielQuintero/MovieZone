import { Typography } from '@material-tailwind/react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { LinkButton, MovieCard, MovieCardSkeleton } from '@components'
import { MovieGridProps } from '@types'
import { useLocalStorage } from '@hooks'

export const MovieGrid = ({ category, keyword, movies, children, loading }: MovieGridProps) => {
  console.log("🚀  movies:", movies)
  const favorites = useLocalStorage()
  
  return (
    <section className="movie__grid gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
      <div className="flex justify-between items-center mb-2 gap-5">
        <Typography variant="h3" className="mr-2 cursor-pointer py-1.5 font-bold text-pink-400 capitalize w-[58%] md:w-[78%] break-words ">
          {category || keyword}
        </Typography>
        <LinkButton
          className="flex items-center gap-1 text-pink-400 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-4 rounded-lg border border-pink-500  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] "
          classIcon="h-5 w-5 inline"
          classTypography="font-bold text-xs"
          title="Go Back"
          redirect="-1"
          IconComponent={ArrowLongLeftIcon}
        />
      </div>

      {children}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-6 ">
        {loading && <MovieCardSkeleton value={20} />}
        {movies.map(
          (movie, index) =>
            (movie.backdrop_path || movie.poster_path) && (
              <MovieCard
                key={index}
                id={movie.id}
                bg={movie.poster_path ? movie.poster_path : movie.backdrop_path}
                title={movie.title}
                favorites={favorites}
                className="test bg-inherit relative grid auto-rows-min w-full h-full rounded-none items-start"
                classHeader="relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-cover"
                classFooter="flex items-start gap-2 justify-between w-full p-2"
                classTypography="text-sm"
                classButton="h-5 w-5"
                classIcon="h-5 w-5 text-indigo-500"
              />
            )
        )}
      </div>
      {!movies.length && !loading && (
        <div className="flex justify-center items-start flex-wrap mt-10">
          <div className="p-4 rounded-md bg-gray-300 text-pink-400 text-center">
            <h1>No films available at the moment.</h1>
          </div>
        </div>
      )}
    </section>
  )
}
