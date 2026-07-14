'use client'
import { useState } from 'react'

import MobileBottomNavbar from '@/components/layout/MobileBottomNavbar'
import MobileNavbar from '@/components/layout/MobileNavbar'
import Navbar from '@/components/layout/Navbar'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div
        className={`_layout _layout_main_wrapper ${darkMode ? '_dark_wrapper' : ''}`}
      >
        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="_main_layout">
          <Navbar />
          <MobileNavbar />
          <MobileBottomNavbar />
          {children}
        </div>
      </div>
    </>
  )
}
