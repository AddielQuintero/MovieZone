import { NavBar } from '@components'
import { navigation } from '@types'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar navigation={navigation} />
      <div className="container mx-auto mt-5 px-5 pb-5 sm:p-5">
        {children}
      </div>
    </div>
  )
}
