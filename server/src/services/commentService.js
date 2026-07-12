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

const getComments = async (postId) => {
  const post = await Post.findById(postId)

  if (!post) {
    throw new Error('Post not found')
  }

  const comments = await Comment.find({ post: postId })
    .populate('author', 'firstName lastName email')
    .sort({ createdAt: -1 })

  return comments
}

export { createComment, getComments }
