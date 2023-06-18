import { MovieBackgroundImage } from '@components'

export const MovieImage = () => {
  return (
    <>
      <MovieBackgroundImage className="h-[50vh] md:h-[123vh] lg:h-[120.3vh] md:opacity-20" />

      <div className="picture hidden md:block sm:h-[20rem] lg:h-[25rem] sm:min-w-[12rem] lg:w-[18rem]">
        <img
          className="h-full w-full rounded-lg"
          src="https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
          alt="nature image"
        />
      </div>

      <div className="md:hidden h-[20rem] w-full"></div>
    </>
  )
}
