'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getMe } from '@/services/authService'
import { getToken, removeToken } from '@/utils/storage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchUser = async () => {
      const token = getToken()

      if (!token) {
        setUser(null)
        setLoading(false)
        router.replace('/login')
        return
      }

      try {
        const res = await getMe()
        setUser(res.data.data)
      } catch (error) {
        console.error(error)
        setUser(null)
        removeToken()
        router.replace('/login')
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [pathname])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
