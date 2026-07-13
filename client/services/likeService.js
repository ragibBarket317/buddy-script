import api from '../lib/axios'

export const togglePostLike = (postId) => api.post(`/posts/${postId}/like`)

export const toggleCommentLike = (commentId) =>
  api.post(`/comments/${commentId}/like`)

export const toggleReplyLike = (replyId) => api.post(`/replies/${replyId}/like`)
