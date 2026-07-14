import api from '../lib/axios'
import { setToken, removeToken } from '@/utils/storage'

export const register = async (data) => {
  const res = await api.post('/auth/register', data)
  if (res.data?.data?.token) {
    setToken(res.data.data.token)
  }
  return res
}

export const login = async (data) => {
  const res = await api.post('/auth/login', data)
  if (res.data?.data?.token) {
    setToken(res.data.data.token)
  }
  return res
}

export const logout = async () => {
  const res = await api.post('/auth/logout')
  removeToken()
  return res
}

export const getMe = async () => api.get('/auth/me')
