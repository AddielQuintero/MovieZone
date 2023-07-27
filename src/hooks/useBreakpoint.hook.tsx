import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false)
  const calculateCardCount = () => {
    const clientWidth = window.innerWidth
    let count

    if (clientWidth < 600) {
      count = 2
    } else if (clientWidth < 768) {
      count = 3
    } else if (clientWidth < 960) {
      count = 4
    } else if (clientWidth < 1280) {
      count = 5
    } else {
      count = 6
    }

    setShowSettingsMenu(clientWidth >= 1024)

    return count
  }

  const [cardCount, setCardCount] = useState(() => calculateCardCount())

  const changeScreenMode = () => {
    const count = calculateCardCount()
    setCardCount(count)
  }

  useEffect(() => {
    window.addEventListener('resize', changeScreenMode)

    return () => {
      window.removeEventListener('resize', changeScreenMode)
    }
  }, [])

  return { cardCount, showSettingsMenu }
}
