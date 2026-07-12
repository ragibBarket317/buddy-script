import { createComment, getComments } from '../services/commentService.js'

const create = async (req, res) => {
  try {
    const data = await createComment({
      postId: req.params.postId,
      author: req.user.userId,
      text: req.body.text,
    })

    return res.status(201).json({
      success: true,
      message: 'Comment created successfully',
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
    const data = await getComments(req.params.postId)

    return res.status(200).json({
      success: true,
      message: 'Comments fetched successfully',
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
