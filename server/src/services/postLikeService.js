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

export { togglePostLike }
