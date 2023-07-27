import { MoviePremierProps } from '@types'
import { MovieCard, MoviePremiereSkeleton } from '@components'
import { Typography } from '@material-tailwind/react'
import { useLocalStorage } from '@hooks'

export const MoviePremier = ({ ratedMovie, classTypography, variant, t }: MoviePremierProps) => {
  const { isFavorite, handleFavorite } = useLocalStorage()

  return (
    <div className="premier mt-10">
      <Typography className={classTypography} variant={variant}>
        {t('lang.topRated')}
      </Typography>
      <div className="premier_container grid grid-cols-2 md:grid-cols-3 gap-4">
        {!ratedMovie.length ? (
          <MoviePremiereSkeleton value={4} />
        ) : (
          ratedMovie.map((movie, index) => (
            <MovieCard
              key={index}
              id={movie.id}
              bg={movie.poster_path}
              title={movie.title}
              favorite={isFavorite(movie.id)}
              handleFavorite={() => handleFavorite(movie.id, movie.title, movie.poster_path)}
              className="premier__card relative flex  bg-inherit rounded-none mb-2"
              classHeader="premier__card-header relative h-full inset-0 m-0 w-full rounded-2xl bg-cover"
              classLink="premier__card-link h-36 w-full"
              classTypography="premier__card-typography max-lg:text-sm font-normal leading-4 dark:text-gray-200"
              classFooter="premier__card-footer flex justify-between gap-3 p-2 "
              classButton="h-5 w-5"
              classIcon="h-5 w-5 text-indigo-500 dark:text-gray-200"
            />
          ))
        )}
      </div>
    </div>
  )
}
