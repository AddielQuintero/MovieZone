import { MovieList, HomeHero } from '@components'

export const Home = () => {
  return (
    <>
      <div>
        <HomeHero />
      </div>
      <div className="movie flex flex-col gap-y-8">
        <MovieList title="Popular" redirect="popular" />
        <MovieList title="Trending" redirect="trending" />
        <MovieList title="Upcoming" redirect="upcoming" />
      </div>
    </>
  )
}
