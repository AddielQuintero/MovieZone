import { Provider } from 'react-redux'
import { store } from '@redux'
import { NavBar } from '@components'
import { navigation } from '@types'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <div className="layout">
        <NavBar navigation={navigation} />
        {children}
      </div>
    </Provider>
  )
}
