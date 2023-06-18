import { Card, CardHeader, CardFooter, Typography, IconButton } from '@material-tailwind/react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export const MovieCard = () => {
  return (
    <Card
      shadow={false}
      className="test bg-inherit relative grid h-[19rem] w-full max-w-[12rem]  rounded-none items-end overflow-hidden text-center"
    >
      <Link to="/movies/category/id" className="">
        <CardHeader
          floated={false}
          shadow={false}
          children={false}
          color="transparent"
          className="absolute inset-0 m-0 h-[83%] w-full rounded-2xl bg-[url('https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg')] bg-cover"
        />
      </Link>

      <CardFooter className="flex items-center justify-between w-full p-2">
        <Typography className="font-normal">2022</Typography>
        <IconButton variant="text" color="white">
          <HeartIcon strokeWidth={2} className="h-5 w-5 text-indigo-500" />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
