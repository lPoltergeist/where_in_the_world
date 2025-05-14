import React, { useEffect, useState } from 'react'
import { NavbarWrapper, ThemeButton } from '@/styles/navbar/Navbar'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

import { useTheme } from '@/contexts/ThemeContext'

const Navbar = () => {
  const [isLight, setIsLight] = useState<boolean | []>([])

  const { toggleTheme } = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedtheme = localStorage.getItem('theme')
      setIsLight(savedtheme === 'light')
    }
  })

  return (
    <NavbarWrapper>
      <h1>Where in the world?</h1>
      <ThemeButton onClick={toggleTheme}>
        {isLight ? <IoMoonOutline /> : <IoSunnyOutline />}
        {isLight ? 'Dark Mode' : 'Light Mode'}
      </ThemeButton>
    </NavbarWrapper>
  )
}

export default Navbar