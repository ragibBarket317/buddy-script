import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { create, getAll } from '../controllers/commentController.js'

const router = express.Router({ mergeParams: true })

router.post('/comments', authMiddleware, create)
router.get('/comments', authMiddleware, getAll)

export default router
