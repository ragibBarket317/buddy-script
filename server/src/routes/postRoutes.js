import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { create, getAll } from '../controllers/postController.js'

const router = express.Router()

router.post('/', authMiddleware, create)
router.get('/', authMiddleware, getAll)

export default router
