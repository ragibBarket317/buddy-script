import { createPost, getFeed } from '../services/postService.js'

const create = async (req, res) => {
  try {
    const data = await createPost({
      author: req.user.userId,
      caption: req.body.caption,
      visibility: req.body.visibility,
      file: req.file,
    })

    return res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

const getAll = async (req, res) => {
  try {
    const data = await getFeed(req.user.userId)

    return res.status(200).json({
      success: true,
      message: 'Posts fetched successfully',
      data,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export { create, getAll }
