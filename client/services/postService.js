import api from '../lib/axios'

export const getPosts = () => api.get('/posts')

export const createPost = (formData) => api.post('/posts', formData)
