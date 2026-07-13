import LeftSidebar from '@/features/feed/components/LeftSidebar'
import MiddleSection from '@/features/feed/components/MiddleSection'
import RightSidebar from '@/features/feed/components/RightSidebar'

export default function FeedPage() {
  return (
    <>
      {/* Main Layout Structure */}
      <div className="container _custom_container">
        <div className="_layout_inner_wrap">
          <div className="row">
            {/* Left Sidebar */}
            <LeftSidebar />
            {/* Left Sidebar */}
            {/* Layout Middle */}
            <MiddleSection />
            {/* Layout Middle */}
            {/* Right Sidebar */}
            <RightSidebar />
            {/* Right Sidebar */}
          </div>
        </div>
      </div>
    </>
  )
}
