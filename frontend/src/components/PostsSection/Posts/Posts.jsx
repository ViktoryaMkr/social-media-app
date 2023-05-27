import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { PostsData } from '../../../MockData/MockPostsData'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../../store/postAction'


const Posts = () => {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth.authData);
  const posts = useSelector(state=> state.post.postData);
  console.log(posts); 

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [])

  // useEffect(() => {
  //   dispatch(getTimelinePosts(user._id));
  // }, [postData])
  

  return (
    <div className='posts'>
        {posts.length ===0 
        ?
        <h3>
          You don't have any post on your timeline. Follow user's or create your first post!
        </h3> 
        
        :posts.map((post, id)=>{
            return <Post data={post} id={id}   />
        } )}

    </div>
  )
}

export default Posts