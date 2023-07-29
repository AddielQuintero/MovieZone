// hooks/useTrailer.ts
import { useState } from 'react'
import { tmdbService } from '@services'
import { ParamsProps } from '@types'

export const useTrailer = (id: number, params: ParamsProps) => {
  const [trailerKey, setTrailerKey] = useState('')

  // useEffect(() => {
  const fetchTrailer = async () => {
    const trailer = await tmdbService.getTrailerMovies(+id, params)

    const vid = trailer.movies.find(
      (vid) =>
        vid.name.toLowerCase().includes('official trailer') ||
        vid.name.toLowerCase().includes('tráiler oficial') ||
        vid.name.toLowerCase().includes('trailer oficial')
    )

    const key = vid ? vid.key : !trailer.movies.length ? '' : trailer.movies[0].key

    setTrailerKey(key)
  }

  // fetchTrailer()
  // }, [id, params])

  return { trailerKey, fetchTrailer }
}
