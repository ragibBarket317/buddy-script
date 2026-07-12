import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { create, getAll } from '../controllers/replyController.js'

const router = express.Router({ mergeParams: true })

router.post('/replies', authMiddleware, create)
router.get('/replies', authMiddleware, getAll)

export default router
