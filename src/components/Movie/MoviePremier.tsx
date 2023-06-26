import { ClassNameProps } from '@types'
import { MovieCard } from '@components'
import { Typography } from '@material-tailwind/react'

export const MoviePremier = ({ classTypography, variant }: ClassNameProps) => {
  return (
    <div className="premier mt-10">
      <Typography className={classTypography} variant={variant}>
        More views
      </Typography>
      <div className="premier_container grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array(4)
          .fill({})
          .map((_, index) => (
            <MovieCard
              key={index}
              className="premier__card relative flex  bg-inherit rounded-none mb-2"
              classHeader="premier__card-header relative h-full inset-0 m-0 w-full rounded-2xl bg-[url('https://image.tmdb.org/t/p/original//1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg')] bg-cover"
              classFooter="premier__card-footer flex justify-between gap-3 p-2 "
              classLink="premier__card-link h-36 w-full"
              classTypography="premier__card-typography max-lg:text-sm font-normal leading-4"
              textFooter="John Wick: Chapter 4"
            />
          ))}
      </div>
    </div>
  )
}
