import React from 'react'
import './ProfileCard.css'
import Cover from '../../../img/cover.jpg';
import defaultCoverImg from '../../../img/defaultCover.png';
import ProfileImage from '../../../img/profileImg.jpg';
import defaultUserImg from '../../../img/defaultUser.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProfileCard = ({onProfilePage}) => {

  const {newRegisteredUser} = useSelector((state) => state.auth.authData)
  const posts = useSelector(state => state.post.postData);
  const publicFolder = process.env.REACT_APP_PUB;
  console.log(newRegisteredUser);
  return (
    <div className='profile-card'>
      <div className='profile-images'>
        <img src={newRegisteredUser.coverImage? publicFolder + newRegisteredUser.coverImage : defaultCoverImg } alt="" height='120px' />
        <img src={newRegisteredUser.profilePicture? publicFolder + newRegisteredUser.profilePicture : defaultUserImg } alt="" />
      </div>

      <div className='profile-name'>
        <span>{newRegisteredUser.firstName} {newRegisteredUser.lastName}</span>
        <span>{newRegisteredUser?.jobTitle}</span>
      </div>

      <div className='follow-status'>
        <hr />
        <div>
          <div className='followers'>
            <span>{newRegisteredUser.followings.length}</span>
            <span>Following </span>
          </div>
          <div className='vertical-line'></div>
          <div className='following'>
            <span>{newRegisteredUser.followers.length}</span>
            <span>Followers</span>
          </div>

          {onProfilePage && (
            <>
              <div className='vertical-line'></div>
              <div className='following'>
                <span>{posts.filter((post)=> post.userId === newRegisteredUser._id).length} </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {onProfilePage? '' : <span>
        <Link to = {`/profile/${newRegisteredUser._id}`} style={{ textDecoration: "none", color: 'inherit'}}>
        My profile
        </Link>
      </span>}
    </div>
  )
}

export default ProfileCard