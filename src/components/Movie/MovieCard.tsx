import { Card, CardHeader, CardFooter, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { MovieCardProps } from '@types'
import { CONFIG } from '@config'
import { MovieFavorite } from '@components'

export const MovieCard = ({ id, bg, title, favorite, handleFavorite, color, className, classHeader, classFooter, classLink, classButton, classIcon, classTypography }: MovieCardProps) => {
  const background = CONFIG.w500Image(bg)
  
  return (
    <Card shadow={false} className={className}>
      <Link to={`/movie/${id}`} className={classLink}>
        <CardHeader
          floated={false}
          shadow={false}
          children={false}
          color={color}
          className={classHeader}
          style={{ backgroundImage: `url('${background}')` }}
        />
      </Link>

      <CardFooter className={classFooter}>
        <Typography className={classTypography}>{title}</Typography>
        <MovieFavorite
          classButton={classButton}
          classIcon={classIcon}
          handleFavorite={handleFavorite}
          favorite={favorite}
        />
      </CardFooter>
    </Card>
  )
}
