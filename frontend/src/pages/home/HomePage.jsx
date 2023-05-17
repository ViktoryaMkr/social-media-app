import React from 'react';
import './HomePage.css';
import Profile from '../../components/Profile/Profile';
import PostsSection from '../../components/PostsSection/PostsSection';



const HomePage = () => {
  return (
    <div className='home'> 
    <Profile/>
    <PostsSection/>
    <div className='right-side'>Right side</div>
    </div>
  )
}

export default HomePage