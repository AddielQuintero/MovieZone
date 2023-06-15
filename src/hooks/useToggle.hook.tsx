import { useState } from 'react'

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const handleOpen = () => setIsOpen(true)
  const handleClosed = () => setIsOpen(false)

  return { isOpen, handleOpen, handleClosed }
}
