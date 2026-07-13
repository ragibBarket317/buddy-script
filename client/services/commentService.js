import api from '../lib/axios'

export const getComments = (postId) => api.get(`/posts/${postId}/comments`)

export const createComment = (postId, data) =>
  api.post(`/posts/${postId}/comments`, data)
