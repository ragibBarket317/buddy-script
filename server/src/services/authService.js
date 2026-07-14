import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const registerUser = async ({ firstName, lastName, email, password }) => {
  const normalizedEmail = email.toLowerCase().trim()

  // Check duplicate email
  const existingUser = await User.findOne({
    email: normalizedEmail,
  })

  if (existingUser) {
    throw new Error('Email already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email: normalizedEmail,
    password: hashedPassword,
  })

  // Generate JWT
  const token = generateToken(user)

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
    },
  }
}

// loginUser
const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.toLowerCase().trim()
  // Check if user exists
  const user = await User.findOne({
    email: normalizedEmail,
  })

  if (!user) {
    throw new Error('Invalid credentials')
  }
  // Check password
  const isPasswordMatched = await bcrypt.compare(password, user.password)

  if (!isPasswordMatched) {
    throw new Error('Invalid credentials')
  }
  // Generate JWT
  const token = generateToken(user)

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
    },
  }
}

const getMe = async (userId) => {
  const user = await User.findById(userId).select(
    'firstName lastName email createdAt',
  )

  if (!user) {
    throw new Error('User not found')
  }

  return user
}

export { registerUser, loginUser, getMe }
