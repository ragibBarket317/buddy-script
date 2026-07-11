import mongoose from 'mongoose'

const replyLikeSchema = new mongoose.Schema(
  {
    reply: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reply',
      required: true,
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
)

replyLikeSchema.index(
  {
    reply: 1,
    user: 1,
  },
  {
    unique: true,
  },
)

const ReplyLike = mongoose.model('ReplyLike', replyLikeSchema)

export default ReplyLike
