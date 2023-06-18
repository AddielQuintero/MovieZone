import { NotFound } from '@pages'
import { MovieGrid } from '@components'
import { useParams } from 'react-router-dom'

export const MovieGridPage = () => {
  const { category } = useParams()
  console.log("🚀  category:", category)

  if (!category) return <NotFound />

  return <MovieGrid category={category} />
}
