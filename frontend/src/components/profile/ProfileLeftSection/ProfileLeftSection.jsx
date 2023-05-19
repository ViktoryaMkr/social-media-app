import React from 'react'
import './ProfileLeftSection.css'
import SearchBar from '../../Search/SearchBar'
import InfoCard from '../../Cards/InfoCard.jsx/InfoCard'
import FollowerCard from '../../Cards/FollowerCard/FollowerCard'

const ProfileLeftSection = () => {
  return (
    <div className='profile-left'>
      <SearchBar/>
      <InfoCard/>
      <FollowerCard/>
        
    </div>
  )
}

export default ProfileLeftSection