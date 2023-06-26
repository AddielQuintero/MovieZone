import { MovieList, HomeSlider, MovieCategories, MoviePremier } from '@components'
import { categories } from '@types'
export const Home = () => {
  return (
    <>
      <HomeSlider />
      <section className="movie flex flex-col gap-x-5 md:gap-x-9 lg:gap-x-12 w-full max-w-[1536px]  mx-auto mt-9 px-5 pb-5 sm:max-2xl:px-[5vw]">
        <main className="movie__main flex flex-col gap-y-8 w-full lg:w-[73%] xl:w-[79%] 2xl:w-[83%] ">
          <MovieList title="Popular" redirect="popular" />
          <MovieList title="Trending" redirect="trending" />
          <MovieList title="Upcoming" redirect="upcoming" />
        </main>
        <aside className="movie__aside w-full lg:w-[22%] xl:w-[19%] 2xl:w-[17%] ">
          <MovieCategories
            className="categories"
            classTypography="mb-2 py-1.5 font-bold text-pink-400"
            variant="h3"
            classListCategories="flex flex-wrap gap-3"
            categories={categories}
          />
          <MoviePremier classTypography="mb-2 py-1.5 font-bold text-pink-400" variant="h3" />
        </aside>
      </section>
    </>
  )
}
