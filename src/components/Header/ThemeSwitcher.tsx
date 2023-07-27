import { useState } from 'react'
import { Switch, Typography } from '@material-tailwind/react'
import { showMobileMenu } from '@types'
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = ({ mobile, t }: showMobileMenu) => {
  const lang = () => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme ? storedTheme : 'dark'
  }

  const [isSwitchOn, setIsSwitchOn] = useState(lang() === 'dark')

  const handleSwitchChange = () => {
    const newTheme = isSwitchOn ? 'light' : 'dark'
    document.body.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsSwitchOn(!isSwitchOn)
  }

  return (
    <div className="relative inline-flex justify-between items-center gap-3 px-3">
      {mobile && (
        <Typography
          variant="h6"
          className="font-sans text-base font-normal text-blue-gray-700 dark:text-gray-200"
        >
          {t && t('lang.switchTheme')}
        </Typography>
      )}
      <div className="relative inline-flex items-center">
        <Switch
          label={
            <>
              <SunIcon className="h-5 w-5 text-white" />
              <MoonIcon className="h-5 w-5 text-blue-gray-800" />
            </>
          }
          ripple={false}
          id="theme-switch-component"
          className="h-full w-full bg-blue-gray-100 checked:bg-blue-gray-700"
          containerProps={{
            className: 'w-14 h-6 relative',
          }}
          circleProps={{
            className: 'before:hidden left-0.5 border-none z-10 peer-checked:left-3.5',
          }}
          labelProps={{
            className: 'absolute m-0 w-full flex justify-between px-1 ',
          }}
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
      </div>
    </div>
  )
}
