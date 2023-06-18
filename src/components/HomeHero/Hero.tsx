import { IconicButton, LinkButton, MovieBackgroundImage, MovieInfo } from '@components'
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'

export const HomeHero = () => {
  return (
    <div className="">
      <div className="isolate px-6 pt-14 lg:px-8">
        <MovieBackgroundImage className="h-[65vh] sm:h-[69vh] lg:h-[70vh]" />

        <div className="mx-auto relative max-w-2xl pt-64 pb-16 sm:pt-[7rem] sm:pb-[4rem] lg:pt-[9rem] lg:pb-[3rem]">
          <div className="sm:mb-8 flex">
            <MovieInfo className="text-gray-100 font-bold" />
          </div>
          <div className="mt-2">
            <Typography className="text-3xl font-bold tracking-tight text-gray-100 md:text-5xl" variant="h3">
              John Wick: Chapter 4
            </Typography>
            <Typography className="hidden sm:block mt-4 text-lg leading-8 text-gray-100" variant="paragraph">
              With the price on his head ever increasing, John Wick uncovers a path to defeating The High
              Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful
              alliances across the globe and forces that turn old friends into foes.
            </Typography>
            <div className="mt-3 sm:mt-6 flex items-center gap-x-6">
              <div className="py-4">
                <IconicButton
                  className="flex items-center gap-3 px-4 py-1.5 sm:py-2"
                  classIcon="h-5 w-5"
                  color="indigo"
                  IconComponent={PlayIcon}
                  name="Play Trailer"
                />
              </div>
              <LinkButton
                className="flex items-center gap-3 px-4 py-[.57rem] sm:py-2 font-bold text-xs align-middle select-none font-sans  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg bg-blue-gray-500 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                classIcon="h-5 w-5"
                classTypography="hidden sm:block font-bold"
                title="Detail"
                redirect='/movies/category/id'
                IconComponent={InformationCircleIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
