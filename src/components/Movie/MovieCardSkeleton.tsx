import { SwiperSlide } from 'swiper/react'

export const MovieCardSkeleton = ({ value }: { value: number }) => {
  return (
    <>
      {Array(value)
        .fill({})
        .map((_, index) => (
          <SwiperSlide
            className="w-full transition-transform animate-pulse"
            key={index}
          >
            <div className="bg-gray-300 h-64 w-full mx-auto mb-2 rounded-2xl" />
            <div className="flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-4 bg-gray-300 rounded col-span-3"></div>
                  <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </>
  )
}