import React from 'react';
import './HomePage.css';
import Profile from '../../components/profile/Profile';



const HomePage = () => {
  return (
    <div className='home'> 
    <Profile/>
    {/* <div className='profile-side'>Profile</div> */}
    <div className='post-side'>Posts</div>
    <div className='right-side'>Right side</div>
    </div>
  )
}

export default HomePage