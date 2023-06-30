import { MovieGenreSkeleton } from '@components'
import { Chip, Typography } from '@material-tailwind/react'
import { MovieGenreProps } from '@types'

export const MovieGenres = ({ genres, className, classListGenres, classTypography, variant }: MovieGenreProps) => {
  return (
    <div className={className}>
      <Typography className={classTypography} variant={variant}>Categories</Typography>
      {!genres.length ? (
        <MovieGenreSkeleton value={20} />
      ) : (
        <div className={classListGenres}>
          {genres.map((genre, index) => (
            <Chip className="bg-blue-gray-800" size="lg" value={genre.name} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
