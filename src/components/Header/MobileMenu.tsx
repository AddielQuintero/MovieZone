import React from 'react'
import { Drawer, Typography, IconButton } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MobileMenuProps } from '@types'
import { Link } from 'react-router-dom'
import { CustomLinkList, CustomSearch, LanguageSwitcher, ThemeSwitcher } from '@components'
import { useTranslation } from 'react-i18next'

export const MobileMenu = (props: MobileMenuProps) => {
  const [t] = useTranslation('global')
  const { navigation, open, onClose, closeDrawer } = props

  return (
    <React.Fragment>
      <Drawer open={open} onClose={onClose} className='dark:bg-slate-950/95'>
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="-m-1.5 p-1.5" onClick={closeDrawer}>
            <span className="sr-only">MovieZone</span>
            <Typography variant="h6" className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-pink-400 dark:text-pink-300">
              MovieZone
            </Typography>
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="container__drawer divide-y divide-pink-400 dark:text-pink-300overflow-y-scroll h-[calc(100%-70px)]">
          <div className="px-4 pt-1 pb-5">
            <CustomSearch onClose={onClose} />
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-blue-gray-700">
              <CustomLinkList
                navigation={navigation}
                handleClose={closeDrawer}
                className={({ isActive, isPending }) =>
                  `flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 dark:hover:bg-slate-700/95 hover:bg-opacity-80 focus:bg-blue-gray-50 dark:focus:bg-slate-700/95 focus:bg-opacity-80 active:bg-blue-gray-50 dark:active:bg-slate-700/95 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none ${
                    isPending ? '' : isActive ? 'text-pink-400 dark:text-pink-300' : 'dark:text-gray-200'
                  }`
                }
              />
            </div>
          </div>

          <div className="lg:hidden p-2 flex flex-col gap-3">
            {!props.showSettingsMenu && <LanguageSwitcher mobile t={t}/>}
            {!props.showSettingsMenu && <ThemeSwitcher mobile t={t}/>}
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  )
}
