import { Navbar, Typography, IconButton } from '@material-tailwind/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NavigateProps } from '@types'
import { Link } from 'react-router-dom'
import { CustomLinkList, CustomSearch, MobileMenu, SettingsMenu } from '@components'
import { useBreakpoint, useToggle } from '@hooks'

export const NavBar = ({ navigation }: { navigation: NavigateProps }) => {
  const { isOpen, handleOpen, handleClosed } = useToggle()
  const { showSettingsMenu } = useBreakpoint()
  return (
    <>
      <Navbar fullWidth className="sticky inset-0 z-10 mx-auto px-4 py-1 dark:bg-slate-950/95 dark:border-slate-950/95">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-500">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MovieZone</span>
              <Typography variant="h4" className="mr-2 font-bold text-pink-400 dark:text-pink-300 cursor-pointer">
                MovieZone
              </Typography>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <IconButton
              variant="text"
              color="pink"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={handleOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-pink-400 dark:text-pink-300" aria-hidden="true" />
            </IconButton>
          </div>

          <div className="hidden lg:flex lg:gap-x-7">
            <CustomLinkList
              navigation={navigation}
              className={({ isActive, isPending }) =>
                `text-sm font-semibold leading-6  ${isPending ? '' : isActive ? 'text-pink-400 dark:text-pink-300' : 'dark:text-gray-200'}`
              }
            />
          </div>

          <div className="hidden lg:flex lg:gap-x-4 z-20">
            <SettingsMenu showSettingsMenu={showSettingsMenu} />
            <CustomSearch />
          </div>
        </div>
      </Navbar>

      <MobileMenu
        showSettingsMenu={showSettingsMenu}
        navigation={navigation}
        open={isOpen}
        onClose={handleClosed}
        closeDrawer={handleClosed}
      />
    </>
  )
}
