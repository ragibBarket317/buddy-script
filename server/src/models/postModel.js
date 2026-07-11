import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      index: true,
    },
    caption: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
      index: true,
    },
  },
  {
    timestamps: true,
  },
)

postSchema.index({
  visibility: 1,
  createdAt: -1,
})

const Post = mongoose.model('Post', postSchema)

export default Post
