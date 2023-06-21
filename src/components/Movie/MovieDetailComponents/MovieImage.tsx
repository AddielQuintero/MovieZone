import { MovieImageProps } from '@types'
import { MovieBackgroundImage } from '@components'

export const MovieImage = ({ url }: MovieImageProps) => {
  return (
    <>
      <MovieBackgroundImage
        classImage="object-cover"
        className="BackgroundImage absolute top-0 left-0 bottom-0 inset-0 -z-10 h-2/4 md:h-full w-full md:opacity-20"
        url={url}
      />

      <div className="picture hidden md:block sm:h-[20rem] lg:h-[25rem] sm:min-w-[12rem] lg:w-[18rem]">
        <img className="h-full w-full rounded-lg" src={url} alt="nature image" />
      </div>

      <div className="md:hidden h-[20rem] w-full"></div>
    </>
  )
}
