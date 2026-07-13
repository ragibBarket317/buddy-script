import CommentLike from '../models/commentLikeModel.js'
import Comment from '../models/commentModel.js'
import Post from '../models/postModel.js'

const createComment = async ({ postId, author, text }) => {
  const post = await Post.findById(postId)

  if (!post) {
    throw new Error('Post not found')
  }

  if (post.visibility === 'private' && post.author !== author) {
    throw new Error('You are not authorized to comment on this post')
  }

  const normalizedText = text.trim() || ''

  if (!normalizedText) {
    throw new Error('Text is required')
  }

  const comment = await Comment.create({
    post: postId,
    author,
    text: normalizedText,
  })

  return comment
}

const getComments = async ({ postId, userId }) => {
  const post = await Post.findById(postId)

  if (!post) {
    throw new Error('Post not found')
  }

  const comments = await Comment.find({ post: postId })
    .populate('author', 'firstName lastName email')
    .sort({ createdAt: -1 })

  const enrichedComments = await Promise.all(
    comments.map(async (comment) => {
      const [likesCount, likedByUser] = await Promise.all([
        CommentLike.countDocuments({ comment: comment._id }),
        userId
          ? CommentLike.findOne({ comment: comment._id, user: userId })
          : null,
      ])

      return {
        ...comment.toJSON(),
        likesCount,
        isLiked: !!likedByUser,
      }
    }),
  )

  return enrichedComments
}

export { createComment, getComments }
