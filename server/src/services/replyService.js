import Comment from '../models/commentModel.js'
import Reply from '../models/replyModel.js'

const createReply = async ({ commentId, author, text }) => {
  const comment = await Comment.findById(commentId)

  if (!comment) {
    throw new Error('Comment not found')
  }

  const normalizedText = text.trim() || ''

  if (!normalizedText) {
    throw new Error('Text is required')
  }

  const reply = await Reply.create({
    comment: commentId,
    author,
    text: normalizedText,
  })

  return reply
}

const getReplies = async (commentId) => {
  const comment = await Comment.findById(commentId)

  if (!comment) {
    throw new Error('Comment not found')
  }

  const replies = await Reply.find({ comment: commentId })
    .populate('author', 'firstName lastName email')
    .sort({ createdAt: -1 })

  return replies
}

export { createReply, getReplies }
