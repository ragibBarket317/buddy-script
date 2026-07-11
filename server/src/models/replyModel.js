import mongoose from 'mongoose'

const replySchema = new mongoose.Schema(
  {
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
      index: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

replySchema.index({
  comment: 1,
  createdAt: -1,
})

const Reply = mongoose.model('Reply', replySchema)

export default Reply
