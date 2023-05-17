import React from 'react'
import SharePost from './SharePost/SharePost'
import "./PostsSection.css"
import Posts from './Posts/Posts'


const PostsSection = () => {
  return (
    <div className='posts-section'>
        <SharePost/>
        <Posts/>
    </div>
  )
}

export default PostsSection