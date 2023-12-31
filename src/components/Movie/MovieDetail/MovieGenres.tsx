import { MovieGenreSkeleton } from '@components'
import { Chip, Typography } from '@material-tailwind/react'
import { MovieGenreProps } from '@types'
import { Link } from 'react-router-dom'

export const MovieGenres = ({ loading, genres, redirect, variant, title, value, className, classListGenres, classTypography, classChip, classSkeleton, classItemSkeleton, t }: MovieGenreProps) => {
  const shouldShowTitle = title && (loading || genres.length > 0);

  return (
    <div className={className}>
      {shouldShowTitle &&(
        <Typography className={classTypography} variant={variant}>
         {t('lang.categories')}
        </Typography>
      )}
      {!genres.length && loading ? (
        <MovieGenreSkeleton
          value={value}
          classSkeleton={classSkeleton}
          classItemSkeleton={classItemSkeleton}
        />
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
