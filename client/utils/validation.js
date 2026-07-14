export const validateEmail = (email) => {
  if (!email.trim()) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'Enter a valid email address'
  return ''
}

export const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 6) return 'Password must be at least 6 characters'
  return ''
}

export const validateName = (name, fieldLabel) => {
  if (!name.trim()) return `${fieldLabel} is required`
  if (name.trim().length < 2)
    return `${fieldLabel} must be at least 2 characters`
  return ''
}

export const validateLoginForm = (formData) => {
  const errors = {}

  const emailError = validateEmail(formData.email)
  if (emailError) errors.email = emailError

  const passwordError = validatePassword(formData.password)
  if (passwordError) errors.password = passwordError

  return errors
}

export const validateRegisterForm = (formData) => {
  const errors = {}

  const firstNameError = validateName(formData.firstName, 'First name')
  if (firstNameError) errors.firstName = firstNameError

  const lastNameError = validateName(formData.lastName, 'Last name')
  if (lastNameError) errors.lastName = lastNameError

  const emailError = validateEmail(formData.email)
  if (emailError) errors.email = emailError

  const passwordError = validatePassword(formData.password)
  if (passwordError) errors.password = passwordError

  return errors
}
