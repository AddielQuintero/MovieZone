import { IconButton, Input } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const CustomSearch = () => {
  return (
    <div className="relative flex w-full gap-2">
      <Input type="search" label="Search..." color="pink" className="pr-10 min-w-[230px]" />
      <IconButton className="!absolute right-1" variant="text" color="pink">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </IconButton>
    </div>
  )
}
