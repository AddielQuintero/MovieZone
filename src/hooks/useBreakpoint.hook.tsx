import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [cardCount, setCardCount] = useState(6)

  const changeScreenMode = () => {
    // const screenWidth = window.innerWidth
    const { clientWidth } = document.documentElement
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

    setCardCount(count)
  }

  useEffect(() => {
    changeScreenMode()
    window.addEventListener('resize', changeScreenMode)

    return () => {
      window.removeEventListener('resize', changeScreenMode)
    }
  }, [])

  return cardCount
}
