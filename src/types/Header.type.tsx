import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
export interface TNavigate {
  name: string
  to: string
  private: boolean
}

export interface NavigateProps extends Array<TNavigate> {}

export interface TLanguage {
  label: string
  code: string
}

export interface LanguageProps extends Array<TLanguage> {}

export interface HandleClose {
  handleClose?: () => void
}

export interface MobileMenuProps extends HandleClose, HookDrawerProps {
  navigation: NavigateProps
  showSettingsMenu: boolean
}

export interface TLink extends HandleClose {
  children?: React.ReactNode
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string)
  navigation: NavigateProps
}

export interface HookDrawerProps {
  open: boolean
  onClose: () => void
  closeDrawer: () => void
}

// export const language: LanguageProps = [
//   { label: 'es', code: 'es-ES' },
//   { label: 'en', code: 'en-US' },
// ]

export const getNavigation = () => {
  const [t] = useTranslation('global')

  const navigation: NavigateProps = [
    { name: `${t('lang.home')}`, to: '/', private: false },
    { name: `${t('lang.trending')}`, to: '/movies/trending', private: false },
    { name: `${t('lang.categories')}`, to: '/categories', private: false },
    { name: `${t('lang.popular')}`, to: '/movies/popular', private: false },
    { name: `${t('lang.upcoming')}`, to: '/movies/upcoming', private: false },
    { name: `${t('lang.favorites')}`, to: '/movies/favorites', private: false },
  ]
  return navigation
}

export interface showMobileMenu{
  mobile?: boolean
  t?: TFunction
  // onClose?: () => void
}
