import {
  getReplyLikers,
  toggleReplyLike,
} from '../services/replyLikeService.js'

const toggle = async (req, res) => {
  try {
    const data = await toggleReplyLike({
      replyId: req.params.replyId,
      userId: req.user.userId,
    })

    const msg = data.isLiked ? 'Reply liked' : 'Reply unliked'

    return res.status(200).json({
      success: true,
      message: msg,
      data,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getAll = async (req, res) => {
  try {
    const data = await getReplyLikers(req.params.replyId)

    return res.status(200).json({
      success: true,
      message: 'Likes fetched successfully',
      data,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export { toggle, getAll }
