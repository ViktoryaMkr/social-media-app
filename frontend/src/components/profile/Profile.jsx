import React from 'react'
import SearchBar from '../Search/SearchBar'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-side'>
        <SearchBar/>
        <ProfileCard/>
    </div>
  )
}

export default Profile