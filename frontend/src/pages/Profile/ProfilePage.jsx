import React from 'react'
import './ProfilePage.css'
import ProfileLeftSection from '../../components/Profile/ProfileLeftSection/ProfileLeftSection'
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'
import PostsSection from '../../components/PostsSection/PostsSection'
import RightSection from '../../components/RightSection/RightSection'



const ProfilePage = () => {
  return (
    <div className='profile'>
      <ProfileLeftSection/>

      <div className='profile-middle'>
        <ProfileCard/>
        <PostsSection/>
      </div>
      <RightSection/>

    </div>
  )
}

export default ProfilePage