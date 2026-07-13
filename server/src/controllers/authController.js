import { loginUser, registerUser } from '../services/authService.js'
import generateToken from '../utils/generateToken.js'

const register = async (req, res) => {
  try {
    const data = await registerUser(req.body)

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

const login = async (req, res) => {
  try {
    const { token, user } = await loginUser(req.body)

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: {
        user,
      },
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export { register, login }
