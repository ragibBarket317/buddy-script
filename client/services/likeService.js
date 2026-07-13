import api from '../lib/axios'

export const togglePostLike = (postId) => api.post(`/posts/${postId}/like`)

export const toggleCommentLike = (commentId) =>
  api.post(`/comments/${commentId}/like`)

export const toggleReplyLike = (replyId) => api.post(`/replies/${replyId}/like`)

export const getPostLikers = async (postId) => api.get(`/posts/${postId}/likes`)

export const getCommentLikers = async (commentId) =>
  api.get(`/comments/${commentId}/likes`)

export const getReplyLikers = async (replyId) =>
  api.get(`/replies/${replyId}/likes`)
