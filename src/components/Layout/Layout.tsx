import { Provider } from 'react-redux'
import { store } from '@redux'
import { NavBar } from '@components'
import { getNavigation } from '@types'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const navigation = getNavigation()
  return (
    <Provider store={store}>
      <div className="layout pb-8 ">
        <NavBar navigation={navigation} />
        {children}
      </div>
    </Provider>
  )
}
