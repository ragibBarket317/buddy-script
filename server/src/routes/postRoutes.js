import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import commentRoutes from './commentRoutes.js'
import { create, getAll } from '../controllers/postController.js'

const router = express.Router()

router.post('/', authMiddleware, create)
router.get('/', authMiddleware, getAll)

// comments routes for a specific post
router.use('/:postId/comments', commentRoutes)

export default router
