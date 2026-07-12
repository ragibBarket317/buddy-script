import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { toggle } from '../controllers/replyLikeController.js'

const router = express.Router({ mergeParams: true })

router.post('/like', authMiddleware, toggle)

export default router
