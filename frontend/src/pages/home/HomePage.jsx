import React from 'react';
import './HomePage.css';
import Profile from '../../components/Profile/Profile';
import PostsSection from '../../components/PostsSection/PostsSection';
import RightSection from '../../components/RightSection/RightSection';


const HomePage = () => {
  return (
    <div className='home'> 
    <Profile/>
    <PostsSection/>
    <RightSection/>
    </div>
  )
}

export default HomePage