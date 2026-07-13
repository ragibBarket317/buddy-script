'use client'
import { useRouter } from 'next/navigation'
import { logout } from '@/services/authService'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <a href="#0" className="_nav_dropdown_link" onClick={handleLogout}>
      <div className="_nav_drop_info">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
            viewBox="0 0 19 19"
          >
            <path
              stroke="#377DFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.667 18H2.889A1.889 1.889 0 011 16.111V2.89A1.889 1.889 0 012.889 1h3.778M13.277 14.222L18 9.5l-4.723-4.722M18 9.5H6.667"
            />
          </svg>
        </span>
        Log Out
      </div>
      <button type="submit" className="_nav_drop_btn_link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="10"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            fill="#112032"
            d="M5 5l.354.354L5.707 5l-.353-.354L5 5zM1.354 9.354l4-4-.708-.708-4 4 .708.708zm4-4.708l-4-4-.708.708 4 4 .708-.708z"
            opacity=".5"
          />
        </svg>
      </button>
    </a>
  )
}
