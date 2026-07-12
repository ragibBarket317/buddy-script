import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getAll, toggle } from '../controllers/replyLikeController.js'

const router = express.Router({ mergeParams: true })

router.post('/like', authMiddleware, toggle)
router.get('/likes', authMiddleware, getAll)

export default router
