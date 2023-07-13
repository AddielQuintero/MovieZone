import { ClassNameProps } from '@types'
import { colors } from '@material-tailwind/react/types/generic'

export interface TMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type?: MediaType
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface TMovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieProps {
  movies: TMovie
  favorite: boolean
  handleFavorite: () => void
}

export interface MovieDetailProps {
  detailMovie: TMovieDetail
  loading?: boolean
}

export interface MoviePremierProps extends ClassNameProps {
  ratedMovie: TMovie[]
}

export interface MovieListProps {
  title: string
  redirect?: string
  movies: TMovie[]
  loading: boolean
}

export interface MovieGridProps {
  category?: string
  keyword: string | null
  movies: TMovie[]
  children?: React.ReactNode
  loading: boolean
  success?: boolean
}

export interface MovieCardProps extends ClassNameProps {
  id: number
  bg: string
  title?: string
  favorite: boolean
  handleFavorite: () => void
  classHeader?: string
  classFooter?: string
  classLink?: string
  classButton?: string
  classIcon?: string
  color?: colors
}

export interface MovieInfoProps extends ClassNameProps {
  average: number
  runtime?: string
  date: string
  children?: React.ReactNode
}

export interface MovieImageProps extends ClassNameProps {
  url?: string
  poster_path?: string
  backdrop_path?: string
}

export interface MovieGenreProps extends ClassNameProps, GenreSkeletonProps {
  genres: Genre[]
  classChip?: string
  redirect?: boolean
  title?: boolean
  loading?: boolean
}

export interface TGenre {
  id: number
  name: string
}

export interface GenreProps {
  genres: TGenre[]
}

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
}

export interface BelongsToCollection {
  backdrop_path: string
  id: number
  name: string
  poster_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface MovieSkeleton {
  reflection?: boolean
  detail?: boolean
}

export interface TMovieType {
  upcoming: string
  popular: string
  top_rated: string
  now_playing: string
  trending: string
}

export type TSelectors = {
  upcoming: TMovie[]
  popular: TMovie[]
  trending: TMovie[]
  bySearch: TMovie[]
  favorites: TMovie[]
}

export const MovieType: TMovieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing: 'now_playing',
  trending: 'week',
}

export interface GenreSkeletonProps {
  value: number
  classSkeleton: string
  classItemSkeleton: string
}

export interface MovieFavoriteProps {
  classButton?: string
  classIcon?: string
  favorite: boolean
  handleFavorite: () => void
}

export interface TFavoriteStorage {
  id: number
  title: string
  poster_path: string
}
