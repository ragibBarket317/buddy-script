'use client'
import { useEffect, useState } from 'react'
import { getPosts } from '@/services/postService'

import PostCard from './Timeline/PostCard'
import PostSubmitSection from './Timeline/PostSubmitSection'
import StorySection from './Timeline/StorySection'
import { useAuth } from '@/context/AuthContext'

export default function MiddleSection() {
  const { user } = useAuth()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts()
        setPosts(response.data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const handlePostCreated = (newPost) => {
    const postWithAuthor = {
      ...newPost,
      author: newPost.author?.firstName ? newPost.author : user,
    }
    setPosts((prev) => [postWithAuthor, ...prev])
  }

  if (loading) {
    return (
      <p style={{ textAlign: 'center', padding: '40px' }}>Loading feed...</p>
    )
  }

  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="_layout_middle_wrap">
          <div className="_layout_middle_inner">
            <StorySection />
            {/*For Mobile End*/}
            <PostSubmitSection onPostCreated={handlePostCreated} />
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
