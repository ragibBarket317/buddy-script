import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { toggle } from '../controllers/postLikeController.js'

const router = express.Router({ mergeParams: true })

router.post('/', authMiddleware, toggle)

export default router
