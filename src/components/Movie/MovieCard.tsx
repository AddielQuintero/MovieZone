import { useState } from 'react'
import { Card, CardHeader, CardFooter, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { MovieCardProps } from '@types'
import { CONFIG } from '@config'
import { MovieFavorite } from '@components'

export const MovieCard = ({ id, bg, title, className, classHeader, classFooter, classLink, classButton, classIcon, classTypography, color }: MovieCardProps) => {
  const [favorite, setFavorite] = useState(false)
  const background = CONFIG.w500Image(bg)

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

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
