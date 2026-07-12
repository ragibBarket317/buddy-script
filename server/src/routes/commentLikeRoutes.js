import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getAll, toggle } from '../controllers/commentLikeController.js'

const router = express.Router({ mergeParams: true })

router.use('/like', authMiddleware, toggle)
router.use('/likes', authMiddleware, getAll)

export default router
