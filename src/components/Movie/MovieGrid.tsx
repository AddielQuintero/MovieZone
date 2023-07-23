import InfiniteScroll from 'react-infinite-scroll-component'
import { Spinner } from '@material-tailwind/react'
import { UpButton,  MovieCard, MovieCardSkeleton, PageHeader } from '@components'
import { MovieGridProps } from '@types'
import { useLocalStorage } from '@hooks'
import { useTranslation } from 'react-i18next'

export const MovieGrid = ({ category, keyword, movies, children, loading, handleSetPage, hasMore }: MovieGridProps) => {
  const { isFavorite, handleFavorite } = useLocalStorage()
  const [t] = useTranslation('global')

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={handleSetPage}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-10">
            <Spinner color="pink" className="h-8 w-8" />
          </div>
        }
      >
        <section className="movie__grid gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
          <PageHeader category={category} keyword={keyword} t={t} />

          {children}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-6 ">
            {loading && <MovieCardSkeleton value={20} />}
            {movies.map(
              (movie, index) =>
                (movie.backdrop_path || movie.poster_path) && (
                  <MovieCard
                    key={index}
                    id={movie.id}
                    bg={movie.poster_path ? movie.poster_path : movie.backdrop_path}
                    title={movie.title}
                    favorite={isFavorite(movie.id)}
                    handleFavorite={() => handleFavorite(movie.id, movie.title, movie.poster_path)}
                    className="test bg-inherit relative grid auto-rows-min w-full h-full rounded-none items-start"
                    classHeader="relative pt-[150%] inset-0 m-0 w-full rounded-2xl bg-cover"
                    classFooter="flex items-start gap-2 justify-between w-full p-2"
                    classTypography="text-sm"
                    classButton="h-5 w-5"
                    classIcon="h-5 w-5 text-indigo-500"
                  />
                )
            )}
          </div>
          {!movies.length && !loading && (
            <div className="flex justify-center items-start flex-wrap mt-10">
              <div className="p-4 rounded-md bg-gray-300 text-pink-400 text-center">
                <h1>{t('lang.noMovies')}</h1>
              </div>
            </div>
          )}
        </section>
      </InfiniteScroll>
      <UpButton />
    </>
  )
}
