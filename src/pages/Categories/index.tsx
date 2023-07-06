import { MovieGenres, MovieGrid } from '@components'
import { tmdbService } from '@services'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { TStore } from '@types'
import { setByGenreMovies, setGenreMovies, setLoading, useAppDispatch } from '@redux'

export const Categories = () => {
  const genres = useSelector((state: TStore) => state.data.genre, shallowEqual)
  const byGenres = useSelector((state: TStore) => state.data.byGenres, shallowEqual)
  const loading = useSelector((state: TStore) => state.data.isLoader, shallowEqual)
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const categoryID = id ? id : ''

  const fetch = async () => {
    if (!genres.length) {
      const reply = await tmdbService.getGenreMovies()
      reply.success && dispatch(setGenreMovies(reply.movies))
    }

    const reply = await tmdbService.getMoviesByGenre(categoryID)
    reply.success && dispatch(setByGenreMovies(reply.movies))

    dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fetch()
  }, [categoryID])

  return (
    <>
      <MovieGrid category="Categories" movies={byGenres} loading={loading}>
        <MovieGenres
          className="genres__filter overflow-hidden overflow-x-auto mb-5"
          classListGenres="flex gap-3 pb-4"
          classTypography="mb-2 py-1.5 font-bold text-pink-400"
          classChip="bg-blue-gray-800 cursor-pointer"
          classSkeleton="genres__filter--skeleton grid grid-cols-[repeat(20,_minmax(6rem,_1fr))] gap-4 overflow-hidden overflow-x-auto"
          classItemSkeleton="w-full h-8 bg-gray-300 mb-5 rounded"
          genres={genres}
          variant="h3"
          value={20}
          redirect
        />
      </MovieGrid>
    </>
  )
}
