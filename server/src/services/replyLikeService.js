import ReplyLike from '../models/replyLikeModel.js'
import Reply from '../models/replyModel.js'

const toggleReplyLike = async ({ replyId, userId }) => {
  const reply = await Reply.findById(replyId)

  if (!reply) {
    throw new Error('Reply not found')
  }

  const existingLike = await ReplyLike.findOne({
    reply: replyId,
    user: userId,
  })

  if (existingLike) {
    await ReplyLike.findByIdAndDelete(existingLike._id)

    return {
      isLiked: false,
    }
  }

  await ReplyLike.create({ reply: replyId, user: userId })

  return {
    isLiked: true,
  }
}

const getReplyLikers = async (replyId) => {
  const reply = await Reply.findById(replyId)

  if (!reply) {
    throw new Error('Reply not found')
  }

  const likes = await ReplyLike.find({
    reply: replyId,
  })
    .populate('user', 'firstName lastName email')
    .sort({
      createdAt: -1,
    })

  return likes
}

export { toggleReplyLike, getReplyLikers }
