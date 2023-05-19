import React from 'react'
import ProfileLeftSection from '../../components/Profile/ProfileLeftSection/ProfileLeftSection'
import SearchBar from '../../components/Search/SearchBar'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import InfoCard from '../../components/Cards/InfoCard.jsx/InfoCard'



const ProfilePage = () => {
  return (
    <div className='profile-left'>
      <SearchBar/>
      <InfoCard/>
      <FollowerCard/>
      <ProfileLeftSection/>
    </div>
  )
}

export default ProfilePage