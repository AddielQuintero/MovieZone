import { MovieGenreSkeleton } from '@components'
import { Chip, Typography } from '@material-tailwind/react'
import { MovieGenreProps } from '@types'
import { Link } from 'react-router-dom'

export const MovieGenres = ({ genres, className, classListGenres, classTypography, classChip, redirect, variant, title, value, classSkeleton, classItemSkeleton }: MovieGenreProps) => {
  return (
    <div className={className}>
      {title && (
        <Typography className={classTypography} variant={variant}>
          Categories
        </Typography>
      )}
      {!genres.length ? (
        <MovieGenreSkeleton value={value} classSkeleton={classSkeleton} classItemSkeleton={classItemSkeleton}/>
      ) : (
        <div className={classListGenres}>
          {genres.map((genre, index) => (
            <Link to={redirect ? `/categories/${genre.id}` : '#'} key={index}>
              <Chip className={classChip} size="lg" value={genre.name} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
