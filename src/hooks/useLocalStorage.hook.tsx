import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setFavoritesMovies } from '@redux'
import { TMovie, TStore } from '@types'

export const useLocalStorage = () => {
  const favorites = useSelector((state: TStore) => state.data.favorites, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!favorites.length) {
        const favoriteStorage: TMovie[] = JSON.parse(localStorage.getItem('FAVORITES_V1') ?? '[]')
        dispatch(setFavoritesMovies(favoriteStorage))
    }
    
  }, [dispatch])

  return favorites
}
