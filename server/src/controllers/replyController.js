import { createReply, getReplies } from '../services/replyService.js'

const create = async (req, res) => {
  try {
    const data = await createReply({
      commentId: req.params.commentId,
      author: req.user.userId,
      text: req.body.text,
    })

    return res.status(201).json({
      success: true,
      message: 'Reply created successfully',
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
    const data = await getReplies(req.params.commentId)

    return res.status(200).json({
      success: true,
      message: 'Replies fetched successfully',
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
