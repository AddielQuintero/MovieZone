import { NavBar } from '@components'
import { navigation } from '@types'

interface LayoutProps {
  children: React.ReactNode
}

export const FullWidthLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar navigation={navigation} />
      <div>{children}</div>
    </div>
  )
}
