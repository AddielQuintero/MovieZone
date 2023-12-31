import { MovieGenres, MovieGrid } from '@components'
import { tmdbService } from '@services'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { TStore } from '@types'
import { clearMovies, setByGenreMovies, setGenreMovies, setLoading, useAppDispatch } from '@redux'
import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export const Categories = () => {
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const genres = useSelector((state: TStore) => state.data.genre, shallowEqual)
  const byGenres = useSelector((state: TStore) => state.data.byGenres, shallowEqual)
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const dispatch = useAppDispatch()
  const pageRef = useRef(1)
  const { id } = useParams<{ id: string }>()
  const categoryID = id ? id : ''
  const [t] = useTranslation('global')

  const fetch = async () => {
    const params = {
      with_genres: categoryID,
      page: pageRef.current,
      language: `${t('lang.langAPI')}`,
    }
    const genres = await tmdbService.getGenreMovies(params)
    const response = await tmdbService.getMoviesByGenre(params)
    genres.success && dispatch(setGenreMovies(genres.movies))
    response.success && dispatch(setByGenreMovies(response.movies.results))

    setHasMore(response.movies.page < response.movies.total_pages)
    dispatch(setLoading(false))
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    pageRef.current = 1
    dispatch(clearMovies())
    dispatch(setLoading(true))
  }, [categoryID, t])

  useEffect(() => {
    fetch()
  }, [categoryID, page, t])

  const handleSetPage = () => {
    setPage((prevPage) => prevPage + 1)
    pageRef.current += 1
  }

  return (
    <>
      <MovieGrid
        category='categories'
        keyword={undefined}
        movies={byGenres}
        loading={loading}
        handleSetPage={handleSetPage}
        hasMore={hasMore}
      >
        <MovieGenres
          className="genres__filter overflow-hidden overflow-x-auto mb-5"
          classListGenres="flex gap-3 pb-4"
          classTypography="mb-2 py-1.5 font-bold text-pink-400"
          classChip="bg-blue-gray-800 cursor-pointer"
          classSkeleton="genres__filter--skeleton grid grid-cols-[repeat(20,_minmax(6rem,_1fr))] gap-4 overflow-hidden overflow-x-auto"
          classItemSkeleton="w-full h-8 bg-gray-300 dark:bg-slate-700/95 mb-5 rounded"
          loading={loading}
          genres={genres}
          variant="h3"
          value={20}
          redirect
          t={t}
        />
      </MovieGrid>
    </>
  )
}
