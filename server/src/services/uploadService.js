import { Readable } from 'stream'
import cloudinary from '../config/cloudinary.js'

const uploadImage = async (file, folder = 'buddyscript/posts') => {
  if (!file) {
    return null
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          return reject(error)
        }

        resolve(result.secure_url)
      },
    )

    Readable.from(file.buffer).pipe(stream)
  })
}

export { uploadImage }
