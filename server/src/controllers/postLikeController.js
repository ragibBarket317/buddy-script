import { getPostLikers, togglePostLike } from '../services/postLikeService.js'

const toggle = async (req, res) => {
  try {
    const data = await togglePostLike({
      postId: req.params.postId,
      userId: req.user.userId,
    })

    const msg = data.isLiked ? 'Post liked' : 'Post unliked'

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
    const data = await getPostLikers(req.params.postId)

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
