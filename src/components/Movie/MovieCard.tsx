import { Card, CardHeader, CardFooter, Typography, IconButton } from '@material-tailwind/react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { MovieCardProps } from '@types'
import { CONFIG } from '@config'

export const MovieCard = ({ id, bg, title, className, classHeader, classFooter, classLink, classTypography, color }: MovieCardProps) => {
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
        <IconButton variant="text" color="white" className="h-5 w-5">
          <HeartIcon className="h-5 w-5 text-indigo-500" />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
