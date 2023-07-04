import { MovieGrid } from '@components'
import { tmdbService } from '@services'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Categories = () => {
  const [category, setCategory] = useState([])
  console.log('🚀  category:', category)
  const { id } = useParams<{ id: string }>()
  console.log('🚀  id:', id)
  const categoryID = id ? id : ''

  const fetch = async () => {
    const reply = await tmdbService.getCategoriesMovies(categoryID)
    setCategory(reply.movies)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    fetch()
  }, [categoryID])

  return <MovieGrid category="Categories" movies={category} />
}
