import { MovieList, HomeSlider } from '@components'

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <div className="movie flex flex-col gap-y-8 container mx-auto mt-5 px-5 pb-5 sm:p-5">
        <MovieList title="Popular" redirect="popular" />
        <MovieList title="Trending" redirect="trending" />
        <MovieList title="Upcoming" redirect="upcoming" />
      </div>
    </>
  )
}
