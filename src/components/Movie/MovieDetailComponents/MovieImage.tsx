import { MovieImageProps } from '@types'
import { MovieBackgroundImage } from '@components'
import { CONFIG } from '@config'

export const MovieImage = ({ poster_path, backdrop_path }: MovieImageProps) => {
  const background = CONFIG.originalImage(backdrop_path ? backdrop_path : poster_path)
  const poster = CONFIG.w500Image(poster_path ? poster_path : backdrop_path)

  return (
    <>
      <MovieBackgroundImage
        classImage="object-cover"
        className="BackgroundImage absolute top-0 left-0 bottom-0 inset-0 -z-10 h-2/4 md:h-full w-full md:opacity-20"
        url={background}
      />

      <div className="picture hidden md:block sm:h-[20rem] lg:h-[25rem] sm:min-w-[12rem] lg:w-[18rem]">
        <img className="h-full w-full rounded-lg" src={poster} alt="nature image" />
      </div>

      <div className="md:hidden h-[20rem] w-full"></div>
    </>
  )
}
