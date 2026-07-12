import Comment from '../models/commentModel.js'
import PostLike from '../models/postLikeModel.js'
import Post from '../models/postModel.js'
import { uploadImage } from './uploadService.js'

const createPost = async ({ author, caption, visibility, file }) => {
  const normalizedCaption = caption.trim() || ''
  let image = ''

  if (!normalizedCaption) {
    throw new Error('Caption is required')
  }

  if (file) {
    image = await uploadImage(file)
  }

  const post = await Post.create({
    author,
    caption: normalizedCaption,
    image,
    visibility: visibility || 'public',
  })

  return post
}

const getFeed = async (userId) => {
  const posts = await Post.find({
    $or: [{ visibility: 'public' }, { visibility: 'private', author: userId }],
  })
    .populate('author', 'firstName lastName email')
    .sort({
      createdAt: -1,
    })

  const enrichedPosts = await Promise.all(
    posts.map(async (post) => {
      const [likesCount, commentsCount] = await Promise.all([
        PostLike.countDocuments({ post: post._id }),
        Comment.countDocuments({ post: post._id }),
      ])

      return {
        ...post.toJSON(),
        likesCount,
        commentsCount,
      }
    }),
  )

  return enrichedPosts
}

export { createPost, getFeed }
