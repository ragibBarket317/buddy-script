export const postFormatTime = (dateString) => {
  if (!dateString) return ''

  const now = new Date()
  const past = new Date(dateString)
  const diffInSeconds = Math.floor((now - past) / 1000)

  // < 1 minute
  if (diffInSeconds < 60) {
    return 'just now'
  }

  // 1–59 minutes
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
  }

  // 1–23 hours
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  }

  // 24+ hours
  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
}

export const commentFormatTime = (dateString) => {
  if (!dateString) return ''

  const now = new Date()
  const past = new Date(dateString)
  const diffInSeconds = Math.floor((now - past) / 1000)

  // < 1 minute
  if (diffInSeconds < 60) {
    return 'just now'
  }

  // 1–59 minutes
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`
  }

  // 1–23 hours
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} h`
  }

  // 24+ hours
  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays} d`
}
