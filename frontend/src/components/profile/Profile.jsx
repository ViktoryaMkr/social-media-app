import React from 'react'
import SearchBar from '../Search/SearchBar'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowerCard from '../FollowerCard/FollowerCard';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-side'>
        <SearchBar/>
        <ProfileCard/>
        <FollowerCard/>
    </div>
  )
}

export default Profile