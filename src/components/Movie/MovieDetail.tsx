import { Typography } from '@material-tailwind/react'
import { PlayIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { LinkButton, MovieGenres, MovieImage, MovieInfo, IconicButton, MovieFavorite } from '@components'
import { MovieDetailProps } from '@types'
import { formatRuntime } from '@utilities'
import { useLocalStorage } from '@hooks'

export const MovieDetail = ({ detailMovie, loading, t }: MovieDetailProps) => {
  const { isFavorite, handleFavorite } = useLocalStorage()
  const formattedDate = detailMovie.release_date.slice(0, 4)
  const formattedRuntime = formatRuntime(detailMovie.runtime)

  return (
    <div className="movie__detail grid grid-cols-1 md:grid-cols-3 place-items-start gap-6 max-w-[992px] mx-auto py-10 md:py-20">
      <MovieImage poster_path={detailMovie.poster_path} backdrop_path={detailMovie.backdrop_path} />

      <div className="flex flex-col w-full h-full col-span-2">
        <div className="hidden md:flex justify-end pb-10">
          <LinkButton
            className="flex items-center gap-1 text-pink-400 dark:text-pink-300 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-4 rounded-lg border border-pink-400 dark:border-pink-300  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] "
            classIcon="h-5 w-5 inline"
            classTypography="font-bold text-xs"
            title={`${t('lang.goBack')}`}
            redirect="-1"
            IconComponent={ArrowLongLeftIcon}
          />
        </div>

        <div className="summary ">
          <MovieInfo average={detailMovie.vote_average} runtime={formattedRuntime} date={formattedDate} className='dark:text-gray-200'>
            <MovieFavorite
              handleFavorite={() => handleFavorite(detailMovie.id, detailMovie.title, detailMovie.poster_path) }
              favorite={isFavorite(detailMovie.id)}
              classButton="h-5 w-5"
              classIcon="h-5 w-5 text-indigo-500 dark:text-gray-200"
            />
          </MovieInfo>

          <div className="my-2">
            <Typography className="dark:text-gray-100" variant="h4">
              {detailMovie.title}
            </Typography>
            <Typography className="mt-4 dark:text-gray-200" variant="paragraph">
              {detailMovie.overview}
            </Typography>
          </div>

          <div className="py-4">
            <IconicButton
              className="flex items-center gap-3 px-4 py-1.5 sm:py-2"
              classIcon="h-5 w-5"
              color="indigo"
              IconComponent={PlayIcon}
              name={`${t('lang.playTrailer')}`}
            />
          </div>

          <MovieGenres
            className="genres__detail dark:text-gray-100"
            classListGenres="flex items-end flex-wrap gap-2 pt-2"
            classChip="bg-blue-gray-800"
            classSkeleton="flex flex-wrap gap-4"
            classItemSkeleton=" w-24 h-8 bg-gray-300 rounded"
            genres={detailMovie.genres}
            loading={loading}
            variant="h4"
            value={2}
            title
            t={t}
          />
        </div>
      </div>
    </div>
  )
}
