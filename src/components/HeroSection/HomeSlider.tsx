import Slider from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import { TStore } from '@types'
import { HomeHero, HomeHeroSkeleton, MovieBackgroundImage } from '@components'
import { CONFIG } from '@config'
import { tmdbService } from '@services'
import { setNowPlayingMovies, useAppDispatch } from '@redux'
import { useSelector } from 'react-redux'
import { useLocalStorage } from '@hooks'

export const HomeSlider = () => {
  const nowPlaying = useSelector((state: TStore) => state.data.nowPlaying)
  const { isFavorite, handleFavorite } = useLocalStorage()

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)
  const dispatch = useAppDispatch()

  const fetchTopRated = async () => {
    const topRated = await tmdbService.getListMovies('now_playing', 0, 6)
    topRated.success && dispatch(setNowPlayingMovies(topRated.movies))
    // dispatch(setLoading(false))
  }

  // const loadCurrentSlide = () => {
  //   if (document.readyState === 'complete') {
  //     handleCurrentSlide(10)
  //   }
  // }

  const handleCurrentSlide = (value: number) => {
    const currentSlide = document.querySelector('.slider-for .slick-active.slick-current') as HTMLElement
    currentSlide.style.zIndex = `${value}`
  }
  useEffect(() => {
    fetchTopRated()
  }, [])

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      setNav1(slider1Ref.current)
      setNav2(slider2Ref.current)
      // document.addEventListener('DOMContentLoaded', loadCurrentSlide)
      handleCurrentSlide(10)
    }
  }, [nowPlaying])

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: () => handleCurrentSlide(0),
    afterChange: () => handleCurrentSlide(10),
  }

  const settingsNav = {
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          focusOnSelect: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <section className="home__slider">
      {!nowPlaying.length ? (
        <HomeHeroSkeleton reflection />
      ) : (
        <>
          <Slider {...settingsFor} asNavFor={nav2} ref={slider1Ref} className="slider-for">
            {nowPlaying.map((movie, index) => (
              <HomeHero
                key={index}
                movies={movie}
                favorite={isFavorite(movie.id)}
                handleFavorite={() => handleFavorite(movie.id, movie.title, movie.poster_path)}
              />
            ))}
          </Slider>

          <div className="h-0">
            <Slider
              {...settingsNav}
              className="slider-nav -translate-y-full w-full -top-1 px-5 sm:px-10 md:px-12 xl:px-20 2xl:px-48"
              asNavFor={nav1}
              ref={slider2Ref}
            >
              {nowPlaying.map((movie, index) => (
                <MovieBackgroundImage
                  className="item flex gap-2 h-36 px-2 pt-8 cursor-pointer overflow-hidden transform transition-all duration-[.35s]"
                  classImage="rounded-2xl "
                  classImageReflection="item__reflection"
                  key={index}
                  url={CONFIG.originalImage(movie.backdrop_path)}
                />
              ))}
            </Slider>
          </div>
        </>
      )}
    </section>
  )
}
