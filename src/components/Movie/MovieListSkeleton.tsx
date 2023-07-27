import { Swiper, SwiperSlide } from 'swiper/react'

export const MovieListSkeleton = ({ value }: { value: number }) => {
  return (
    <>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {Array(value)
          .fill({})
          .map((_, index) => (
            <SwiperSlide
              className="w-[43%] sm:w-[30%] lg:w-[23%] xl:w-[18%] transition-transform animate-pulse"
              key={index}
            >
              <div className="bg-gray-300 dark:bg-slate-700/95 h-56 w-full mx-auto mb-2 rounded-2xl" />
              <div className="flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="h-4 bg-gray-300 dark:bg-slate-700/95 rounded col-span-3"></div>
                    <div className="h-4 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
