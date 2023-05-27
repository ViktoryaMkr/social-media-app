import React from 'react'
import './ProfileCard.css'
import Cover from '../../../img/cover.jpg';
import defaultCoverImg from '../../../img/defaultCover.png';
import ProfileImage from '../../../img/profileImg.jpg';
import defaultUserImg from '../../../img/defaultUser.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProfileCard = ({onProfilePage}) => {

  const {user} = useSelector((state) => state.auth.authData)
  const publicFolder = process.env.REACT_APP_PUB;
  return (
    <div className='profile-card'>
      <div className='profile-images'>
        <img src={user.coverPicture? publicFolder + user.publicFolder : defaultCoverImg } alt="" height='120px' />
        <img src={user.profilePicture? publicFolder + user.publicFolder : defaultUserImg } alt="" />
      </div>

      <div className='profile-name'>
        <span>{user.firstName} {user.lastName}</span>
        <span>Senior Software Engineer</span>
      </div>

      <div className='follow-status'>
        <hr />
        <div>
          <div className='followers'>
            <span>{user.followings.length}</span>
            <span>Following </span>
          </div>
          <div className='vertical-line'></div>
          <div className='following'>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {onProfilePage && (
            <>
              <div className='vertical-line'></div>
              <div className='following'>
                <span>3 </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {onProfilePage? '' : <span>
        <Link to = {`/profile/${user._id}`} style={{ textDecoration: "none", color: 'inherit'}}>
        My profile
        </Link>
      </span>}
    </div>
  )
}

export default ProfileCard