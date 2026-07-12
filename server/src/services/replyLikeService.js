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

export { toggleReplyLike }
