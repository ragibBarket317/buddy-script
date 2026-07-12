import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { toggle } from '../controllers/commentLikeController.js'

const router = express.Router({ mergeParams: true })

router.use('/like', authMiddleware, toggle)

export default router
