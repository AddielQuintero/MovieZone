import { useState } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcherProps, language } from '@types'

export const LanguageSwitcher = ({ mobile, handleClose }: LanguageSwitcherProps) => {
  const [lang, setLang] = useState('en')
  const { i18n } = useTranslation('global')

  const handleChangeLanguage = (value: string) => {
    setLang(value)
    i18n.changeLanguage(value)
    handleClose && handleClose()
  }

  return (
    <Menu>
      <MenuHandler>
        <Button className="px-2 py-1 outline-none " variant="text" color="pink">
          {mobile ? 'Switch language' : lang}
        </Button>
      </MenuHandler>
      <MenuList className="min-w-[7.375rem] lg:min-w-[4.375rem] p-1 z-[9999]">
        {language.map((lang) => (
          <MenuItem key={lang.label} onClick={() => handleChangeLanguage(lang.label)}>
            {lang.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
