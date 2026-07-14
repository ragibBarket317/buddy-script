export const getToken = () => localStorage.getItem('token')

export const setToken = (token) => {
  localStorage.setItem('token', token)
  document.cookie = 'isLoggedIn=true; path=/; max-age=604800; SameSite=Lax'
}
export const removeToken = () => {
  localStorage.removeItem('token')
  document.cookie = 'isLoggedIn=; path=/; max-age=0'
}
