import api from '../lib/axios'

export const getReplies = (commentId) =>
  api.get(`/comments/${commentId}/replies`)

export const createReply = (commentId, data) =>
  api.post(`/comments/${commentId}/replies`, data)
