import Comment from '../models/commentModel.js'
import ReplyLike from '../models/replyLikeModel.js'
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

const getReplies = async ({ commentId, userId }) => {
  const comment = await Comment.findById(commentId)

  if (!comment) {
    throw new Error('Comment not found')
  }

  const replies = await Reply.find({ comment: commentId })
    .populate('author', 'firstName lastName email')
    .sort({ createdAt: -1 })

  const enrichedReplies = await Promise.all(
    replies.map(async (reply) => {
      const [likesCount, likedByUser] = await Promise.all([
        ReplyLike.countDocuments({ reply: reply._id }),
        userId ? ReplyLike.findOne({ reply: reply._id, user: userId }) : null,
      ])

      return {
        ...reply.toJSON(),
        likesCount,
        isLiked: !!likedByUser,
      }
    }),
  )

  return enrichedReplies
}

export { createReply, getReplies }
