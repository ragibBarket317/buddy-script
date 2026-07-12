import { toggleCommentLike } from '../services/commentLikeService.js'

const toggle = async (req, res) => {
  try {
    const data = await toggleCommentLike({
      commentId: req.params.commentId,
      userId: req.user.userId,
    })

    const msg = data.isLiked ? 'Comment liked' : 'Comment unliked'

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

export { toggle }
