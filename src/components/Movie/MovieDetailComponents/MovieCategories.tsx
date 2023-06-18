import { Chip, Typography } from '@material-tailwind/react'

export const MovieCategories = () => {
  return (
    <div>
      <Typography variant="h4">Categories</Typography>
      <div className="flex items-end gap-2 pt-2">
        {Array(3)
          .fill({})
          .map((_, index) => (
            <Chip className="bg-blue-gray-800" size="lg" value="Action" key={index} />
          ))}
      </div>
    </div>
  )
}
