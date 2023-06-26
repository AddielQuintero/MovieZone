import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { MovieCard } from '@components'

export const MovieGrid = ({ category }: { category: string }) => {
  return (
    <section className="movie__grid container mx-auto mt-5 px-5 pb-5 sm:p-5">
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
          {Array(20)
            .fill({})
            .map((_, index) => (
              <MovieCard
                key={index}
                className="test bg-inherit relative grid  w-full h-full rounded-none items-end overflow-hidden text-center"
                classHeader="relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-[url('https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg')] bg-cover"
                classFooter="flex items-center justify-between w-full p-2"
                textFooter='2023'
              />
            ))}
        </div>
      </div>
    </section>
  )
}
