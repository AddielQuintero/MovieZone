import { Card, CardHeader, CardFooter, Typography, IconButton } from '@material-tailwind/react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { MovieCardProps } from '@types'

export const MovieCard = ({ className, classHeader, classFooter, classLink, classTypography, color, textFooter }: MovieCardProps) => {
  return (
    <Card shadow={false} className={className}>
      <Link to={`/movies/category/${1}`} className={classLink}>
        <CardHeader
          floated={false}
          shadow={false}
          children={false}
          color={color}        
          className={classHeader}
          // style={{backgroundImage: "url('https://image.tmdb.org/t/p/original//1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg')", backgroundSize: "cover"}}
        />
      </Link>

      <CardFooter className={classFooter}>
        <Typography className={classTypography}>{textFooter}</Typography>
        <IconButton variant="text" color="white" className="h-5 w-5">
          <HeartIcon className="h-5 w-5 text-indigo-500" />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
