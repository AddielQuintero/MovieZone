import { Chip, Typography } from '@material-tailwind/react'

export const MovieCategories = ({ categories }: { categories: string[] }) => {
  return (
    <div>
      <Typography variant="h4">Categories</Typography>
      <div className="flex items-end gap-2 pt-2">
        {categories.map((category, index) => (
          <Chip className="bg-blue-gray-800" size="lg" value={category} key={index} />
        ))}
      </div>
    </div>
  )
}
