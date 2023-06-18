import { Typography } from '@material-tailwind/react'
import { StarIcon } from '@heroicons/react/24/solid'
import { ClassNameProps } from '@types'

export const MovieInfo = ({ className }: ClassNameProps) => {
  return (
    <div className="flex items-center gap-3">
      <Typography variant="paragraph" className={`inline ${className} `}>
        2023
      </Typography>
      <Typography variant="paragraph" className={`inline ${className} `}>
        1h 59m
      </Typography>
      <Typography variant="paragraph" className={`flex gap-1 items-center ${className} `}>
        <StarIcon className="h-5 w-5  text-pink-400 mb-1" /> 5.4/10
      </Typography>
    </div>
  )
}
