export interface TNavigate {
  name: string
  to: string
  private: boolean
}

export interface NavigateProps extends Array<TNavigate> {}

export interface HandleClose {
  handleClose?: () => void
}

export interface MobileMenuProps extends HandleClose, HookDrawerProps {
  navigation: NavigateProps
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

export const navigation: NavigateProps = [
  { name: 'Home', to: '/', private: false },
  { name: 'Trending', to: '/movies/trending', private: false },
  { name: 'Categories', to: '/categories', private: false },
  { name: 'Popular', to: '/movies/popular', private: false },
  { name: 'Upcoming', to: '/movies/upcoming', private: false },
  { name: 'Favorites', to: '/movies/favorites', private: false },
]
