import Post from '../models/postModel.js'

const createPost = async ({ author, caption, visibility }) => {
  const normalizedCaption = caption.trim() || ''

  if (!normalizedCaption) {
    throw new Error('Caption is required')
  }

  const post = await Post.create({
    author,
    caption: normalizedCaption,
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

  return posts
}

export { createPost, getFeed }
