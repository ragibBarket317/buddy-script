import PostsSection from './Timeline/PostsSection'
import PostSubmitSection from './Timeline/PostSubmitSection'
import StorySection from './Timeline/StorySection'

export default function MiddleSection() {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="_layout_middle_wrap">
          <div className="_layout_middle_inner">
            <StorySection />
            {/*For Mobile End*/}
            <PostSubmitSection />
            <PostsSection />
          </div>
        </div>
      </div>
    </>
  )
}
