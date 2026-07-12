import CommentLike from '../models/commentLikeModel.js'
import Comment from '../models/commentModel.js'

const toggleCommentLike = async ({ commentId, userId }) => {
  const comment = await Comment.findById(commentId)

  if (!comment) {
    throw new Error('Comment not found')
  }

  const existingLike = await CommentLike.findOne({
    comment: commentId,
    user: userId,
  })

  if (existingLike) {
    await CommentLike.findByIdAndDelete(existingLike._id)

    return {
      isLiked: false,
    }
  }

  await CommentLike.create({ comment: commentId, user: userId })

  return {
    isLiked: true,
  }
}

const getCommentLikers = async (commentId) => {
  const comment = await Comment.findById(commentId)

  if (!comment) {
    throw new Error('Comment not found')
  }

  const likes = await CommentLike.find({
    comment: commentId,
  })
    .populate('user', 'firstName lastName email')
    .sort({ createdAt: -1 })

  return likes
}

export { toggleCommentLike, getCommentLikers }
