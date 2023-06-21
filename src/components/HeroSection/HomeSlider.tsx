import Slider from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import { data } from '@types'
import { HomeHero, MovieBackgroundImage } from '@components'

export const HomeSlider = () => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)

  const handleCurrentSlide = (value: number) => {
    const currentSlide = document.querySelector('.slider-for .slick-active.slick-current') as HTMLElement
    currentSlide.style.zIndex = `${value}`
  }

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      setNav1(slider1Ref.current)
      setNav2(slider2Ref.current)
      handleCurrentSlide(10)
    }
  }, [])

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

  console.log('home__slider')

  return (
    <div className="home__slider ">
      <Slider {...settingsFor} asNavFor={nav2} ref={slider1Ref} className="slider-for">
        {data.map((movie, index) => (
          <HomeHero key={index} movie={movie} />
        ))}
      </Slider>

      <Slider
        {...settingsNav}
        className="slider-nav absolute w-full bottom-4 px-5 sm:px-10 md:px-12 xl:px-20 2xl:px-48"
        asNavFor={nav1}
        ref={slider2Ref}
      >
        {data.map((item, index) => (
          <MovieBackgroundImage
            className="item flex gap-2 h-36 px-2 pt-8 cursor-pointer overflow-hidden transform transition-all duration-[.35s]"
            classImage="rounded-2xl "
            classImageReflection="item__reflection"
            key={index}
            url={item.linkImg}
          />
        ))}
      </Slider>
    </div>
  )
}