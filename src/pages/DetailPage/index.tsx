import { MovieDetail, MovieList } from '@components'
import { data } from '@types'
import { useParams } from 'react-router-dom'
import { NotFound } from '@pages'

export const DetailPage = () => {
  const { id } = useParams()
  const movie = id !== undefined && data.find((movie) => movie.id === +id)

  if (!movie || !id) return <NotFound />

  return (
    <div className="container mx-auto mt-5 px-5 pb-5 sm:p-5">
      <MovieDetail movie={movie} />
      <MovieList title="Similar Movies" />
    </div>
  )
}
