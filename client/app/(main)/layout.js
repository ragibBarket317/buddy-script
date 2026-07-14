'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getMe } from '@/services/authService'

import { AuthProvider } from '@/context/AuthContext'
import MobileBottomNavbar from '@/components/layout/MobileBottomNavbar'
import MobileNavbar from '@/components/layout/MobileNavbar'
import Navbar from '@/components/layout/Navbar'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function MainLayout({ children }) {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe()
        setLoading(false)
      } catch (error) {
        router.replace('/login')
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  )
}
