// import React from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { Menu, MenuHandler, MenuList, MenuItem, IconButton } from '@material-tailwind/react'
import { LanguageSwitcher, ThemeSwitcher } from '@components'
import { applyTheme } from '@config'


export const SettingsMenu = ({ showSettingsMenu }: { showSettingsMenu: boolean }) => {

  applyTheme()

  return (
    <Menu
      // dismiss={{
      //   itemPress: false,
      // }}
    >
      <MenuHandler>
        <IconButton className="outline-none text-pink-400 dark:text-pink-300" variant="text">
          <EllipsisVerticalIcon className="h-8 w-8" />
        </IconButton>
      </MenuHandler>
      <MenuList className="min-w-[7.375rem] lg:min-w-[4.375rem] p-1 dark:bg-slate-950/95 dark:border-slate-900/95">
        <MenuItem className='dark:hover:bg-slate-700/95 dark:focus:bg-slate-700/95'>{showSettingsMenu && <LanguageSwitcher />}</MenuItem>
        <MenuItem className="w-full flex justify-between dark:hover:bg-slate-700/95 dark:focus:bg-slate-700/95">{showSettingsMenu && <ThemeSwitcher />}</MenuItem>
      </MenuList>
    </Menu>
  )
}
