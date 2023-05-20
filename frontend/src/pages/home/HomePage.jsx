import React from 'react';
import './HomePage.css';
import Profile from '../../components/Profile/Profile';
import PostsSection from '../../components/PostsSection/PostsSection';
import RightSection from '../../components/RightSection/RightSection';
import Navbar from '../../components/Navbar/Navbar';


const HomePage = () => {
  return (

    <>
    <Navbar/>
    <div className='main'>

    <div className='home'> 
    <Profile/>
    <PostsSection/>
    <RightSection/>
    </div>
    </div>
    </>
  )
}

export default HomePage