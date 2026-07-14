'use client'
import { useState } from 'react'

import { AuthProvider, useAuth } from '@/context/AuthContext'
import MobileBottomNavbar from '@/components/layout/MobileBottomNavbar'
import MobileNavbar from '@/components/layout/MobileNavbar'
import Navbar from '@/components/layout/Navbar'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import LoadingSpinner from '@/components/LoadingSpinner'

function LayoutContent({ children, darkMode, setDarkMode }) {
  const { loading, user } = useAuth()
  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return null
  }

  return (
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
  )
}

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <AuthProvider>
      <LayoutContent darkMode={darkMode} setDarkMode={setDarkMode}>
        {children}
      </LayoutContent>
    </AuthProvider>
  )
}
