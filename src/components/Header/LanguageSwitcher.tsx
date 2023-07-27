import { useState } from 'react'
import { Switch, Typography } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'
import { showMobileMenu } from '@types'

export const LanguageSwitcher = ({ mobile, t }: showMobileMenu) => {
  const lang = () => {
    const storedLang = localStorage.getItem('LANGUAGE')
    return storedLang ? JSON.parse(storedLang) : 'en'
  }

  const [isSwitchOn, setIsSwitchOn] = useState(lang() === 'es')

  const { i18n } = useTranslation('global')

  const handleSwitchChange = () => {
    const newLang = isSwitchOn ? 'en' : 'es'
    i18n.changeLanguage(newLang)
    localStorage.setItem('LANGUAGE', JSON.stringify(newLang))
    setIsSwitchOn(!isSwitchOn)
  }

  return (
    <div className="relative inline-flex justify-between items-center gap-3 p-3">
      {mobile && (
        <Typography
          variant="h6"
          className="font-sans text-base font-normal text-blue-gray-700 dark:text-gray-200"
        >
          {t && t('lang.switchLanguage')}
        </Typography>
      )}
      <div className="relative inline-flex items-center">
        <Switch
          label={
            <>
              <span className="text-white text-xs">EN</span>
              <span className="text-pink-400 text-xs">ES</span>
            </>
          }
          ripple={false}
          id="language-switch-component"
          className="h-full w-full checked:bg-pink-300"
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

// export const LanguageSwitcher = ({ mobile, handleClose }: LanguageSwitcherProps) => {
//   const [lang, setLang] = useState(() => {
//     const storedLang = localStorage.getItem('LANGUAGE')
//     return storedLang ? JSON.parse(storedLang) : 'en'
//   })
//   const { i18n } = useTranslation('global')

//   const handleChangeLanguage = (value: string) => {
//     localStorage.setItem('LANGUAGE', JSON.stringify(value))
//     setLang(value)
//     i18n.changeLanguage(value)
//     handleClose && handleClose()
//   }

//   return (
//     <Menu>
//       <MenuHandler>
//         <Button className="px-2 py-1 outline-none " variant="text" color="pink">
//           {mobile ? 'Switch language' : lang}
//         </Button>
//       </MenuHandler>
//       <MenuList className="min-w-[7.375rem] lg:min-w-[4.375rem] p-1 z-[9999]">
//         {language.map((lang) => (
//           <MenuItem key={lang.label} onClick={() => handleChangeLanguage(lang.label)}>
//             {lang.label}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   )
// }
