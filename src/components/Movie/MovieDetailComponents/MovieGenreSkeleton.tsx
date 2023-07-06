import { GenreSkeletonProps } from '@types'

export const MovieGenreSkeleton = ({ value, classSkeleton, classItemSkeleton }: GenreSkeletonProps) => {
  return (
    <div className={`transition-transform animate-pulse ${classSkeleton}`}>
      {Array(value)
        .fill({})
        .map((_, index) => (
          <div className={classItemSkeleton} key={index}></div>
        ))}
    </div>
  )
}
