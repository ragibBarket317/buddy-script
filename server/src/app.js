import express from 'express'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
import replyRoutes from './routes/replyRoutes.js'
import commentLikeRoutes from './routes/commentLikeRoutes.js'
import replyLikeRoutes from './routes/replyLikeRoutes.js'

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments/:commentId', replyRoutes)
app.use('/api/comments/:commentId', commentLikeRoutes)
app.use('/api/replies/:replyId', replyLikeRoutes)

export default app
