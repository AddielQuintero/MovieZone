import { TStore } from '@types'
import { MovieGrid } from '@components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setLoading, useAppDispatch } from '@redux'
import { useLocalStorage } from '@hooks'

export const Favorites = () => {
  const loading = useSelector((state: TStore) => state.data.isLoader)
  const favorites = useLocalStorage()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(false))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return <MovieGrid category="Favorites" movies={favorites} loading={loading} />
}
