export const MovieGenreSkeleton = ({ value }: { value: number }) => {
  return (
    <>
      <div className=" transition-transform animate-pulse flex flex-wrap gap-4">
        {Array(value)
          .fill({})
          .map((_, index) => (
            <div className="genres__skeleton w-[5.5rem] sm:w-24  h-8 bg-gray-300 rounded" key={index}></div>
          ))}
      </div>
    </>
  )
}
