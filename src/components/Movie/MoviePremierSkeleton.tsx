export const MoviePremiereSkeleton = ({ value }: { value: number }) => {
  return (
    <>
      {Array(value)
        .fill({})
        .map((_, index) => (
          <div
            className="premier__skeleton flex flex-col justify-around items-start mx-auto w-full gap-3 bg-gray-8000 transition-transform animate-pulse "
            key={index}
          >
            <div className="premier__skeleton-header h-32 sm:h-40 w-full bg-gray-300 rounded group  p-5"></div>
            <div className="premier__skeleton-footer grid grid-cols-4 gap-4 w-full text-gray-100">
              <div className="h-4 bg-gray-300 rounded col-span-3"></div>
              <div className="h-4 bg-gray-300 rounded col-span-1"></div>
            </div>
          </div>
        ))}
    </>
  )
}
