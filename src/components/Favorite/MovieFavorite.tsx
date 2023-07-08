import { IconButton } from '@material-tailwind/react'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { MovieFavoriteProps } from '@types'

export const MovieFavorite = ({ handleFavorite, favorite, classButton, classIcon }: MovieFavoriteProps) => {

  return (
    <>
      <IconButton variant="text" color="white" className={classButton} onClick={handleFavorite}>
        {favorite ? <HeartSolid className={classIcon} /> : <HeartOutline className={classIcon} />}
      </IconButton>
    </>
  )
}
