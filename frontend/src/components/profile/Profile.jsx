import React from 'react'
import SearchBar from '../Search/SearchBar'
import ProfileCard from '../Cards/ProfileCard/ProfileCard'
import FollowerCard from '../Cards/FollowerCard/FollowerCard';
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