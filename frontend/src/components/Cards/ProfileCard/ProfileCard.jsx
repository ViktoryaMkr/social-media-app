import React from 'react'
import './ProfileCard.css'
import Cover from '../../../img/cover.jpg';
import defaultCoverImg from '../../../img/defaultCover.png';
import ProfileImage from '../../../img/profileImg.jpg';
import defaultUserImg from '../../../img/defaultUser.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProfileCard = ({onProfilePage}) => {

  const { user } = useSelector((state) => state.auth.authData)
  const posts = useSelector(state => state.post.postData);
  const publicFolder = process.env.REACT_APP_PUB;
  console.log(user);
  return (
    <div className='profile-card'>
      <div className='profile-images'>
        <img src={user.coverImage? publicFolder + user.coverImage : defaultCoverImg } alt="" height='120px' />
        <img src={user.profilePicture? publicFolder + user.profilePicture : defaultUserImg } alt="" />
      </div>

      <div className='profile-name'>
        <span>{user.firstName} {user.lastName}</span>
        <span>{user?.jobTitle}</span>
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
                <span>{posts.filter((post)=> post.userId === user._id).length} </span>
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