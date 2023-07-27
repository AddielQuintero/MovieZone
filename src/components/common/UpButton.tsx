import { useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { IconicButton } from '@components'

export const UpButton = () => {
  useEffect(() => {
    window.addEventListener('scroll', showUpButton)
    return () => {
      window.removeEventListener('scroll', showUpButton)
    }
  }, [])

  const showUpButton = () => {
    const upButton = document.querySelector('.upButton') as HTMLElement | null
    const shouldDisplay = document.documentElement.scrollTop >= window.innerHeight
    if (upButton) {
      upButton.style.display = shouldDisplay ? 'flex' : 'none'
    }
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <IconicButton
      className="upButton z-10 !fixed bottom-8 right-8 hidden items-center gap-3 px-4 py-1.5 sm:py-2 text-pink-400 dark:text-pink-300 dark:bg-slate-950/95 border border-pink-400 dark:border-pink-300 shadow-pink-500/20 hover:shadow-pink-500/20"
      classIcon="h-5 w-5"
      color="white"
      IconComponent={ChevronUpIcon}
      onClick={handleScrollTop}
    />
  )
}
