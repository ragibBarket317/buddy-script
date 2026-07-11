import { loginUser, registerUser } from '../services/authService.js'

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
    const data = await loginUser(req.body)

    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export { register, login }
