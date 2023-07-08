import { Typography } from '@material-tailwind/react'
import { StarIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { MovieInfoProps } from '@types'

export const MovieInfo = ({ average, runtime, date, className, children }: MovieInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <Typography variant="paragraph" className={`inline ${className} `}>
        {date}
      </Typography>
      {runtime && (
        <Typography variant="paragraph" className={`flex gap-1 items-center ${className} `}>
          <ClockIcon className="h-5 w-5  text-pink-400 mb-1" /> {runtime}
        </Typography>
      )}
      <Typography variant="paragraph" className={`flex gap-1 items-center ${className} `}>
        <StarIcon className="h-5 w-5  text-pink-400 mb-1" /> {`${average.toFixed(1)}/10`}
      </Typography>
      {children}
    </div>
  )
}
