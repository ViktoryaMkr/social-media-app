import React from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { PostsData } from '../../../MockData/MockPostsData'


const Posts = () => {
  return (
    <div className='posts'>
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}   />
        } )}

    </div>
  )
}

export default Posts