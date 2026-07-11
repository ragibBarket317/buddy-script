import MobileBottomNavbar from '@/components/layout/MobileBottomNavbar'
import MobileNavbar from '@/components/layout/MobileNavbar'
import Navbar from '@/components/layout/Navbar'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function MainLayout({ children }) {
  return (
    <>
      <div className="_layout _layout_main_wrapper">
        <ThemeSwitcher />
        <div className="_main_layout">
          <Navbar />
          <MobileNavbar />
          <MobileBottomNavbar />
          {children}
        </div>
      </div>
    </>
  )
}
