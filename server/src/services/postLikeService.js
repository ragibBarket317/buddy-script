import PostLike from '../models/postLikeModel.js'
import Post from '../models/postModel.js'

const togglePostLike = async ({ postId, userId }) => {
  const post = await Post.findById(postId)

  if (!post) {
    throw new Error('Post not found')
  }

  const existingLike = await PostLike.findOne({ post: postId, user: userId })

  if (existingLike) {
    await PostLike.findByIdAndDelete(existingLike._id)

    return {
      isLiked: false,
    }
  }

  await PostLike.create({ post: postId, user: userId })

  return {
    isLiked: true,
  }
}

const getPostLikers = async (postId) => {
  const post = await Post.findById(postId)

  if (!post) {
    throw new Error('Post not found')
  }

  const likes = await PostLike.find({
    post: postId,
  })
    .populate('user', 'firstName lastName email')
    .sort({ createdAt: -1 })

  return likes
}

export { togglePostLike, getPostLikers }
