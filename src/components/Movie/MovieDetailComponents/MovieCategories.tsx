import { MovieCategoriesProps } from '@types'
import { Chip, Typography } from '@material-tailwind/react'

export const MovieCategories = ({ categories, className, classListCategories, classTypography, variant }: MovieCategoriesProps) => {
  return (
    <div className={className}>
      <Typography className={classTypography} variant={variant}>Categories</Typography>
      <div className={classListCategories}>
        {categories.map((category, index) => (
          <Chip className="bg-blue-gray-800" size="lg" value={category} key={index} />
        ))}
      </div>
    </div>
  )
}
