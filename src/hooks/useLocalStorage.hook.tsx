import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setFavoritesMovies, toggleFavorite } from '@redux'
import { TMovie, TStore } from '@types'

export const useLocalStorage = () => {
  const favorites = useSelector((state: TStore) => state.data.favorites, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!favorites.length) {
      const favoriteStorage: TMovie[] = JSON.parse(localStorage.getItem('FAVORITE_MOVIES') ?? '[]')
      dispatch(setFavoritesMovies(favoriteStorage))
    }
  }, [])

  const isFavorite = (id: number) => {
    return favorites.some((favorite) => favorite.id === id)
  }

  const handleFavorite = (id: number, title: string, poster_path: string) => {
    dispatch(toggleFavorite({ id, title, poster_path }))
  }

  return { isFavorite, handleFavorite }
}
