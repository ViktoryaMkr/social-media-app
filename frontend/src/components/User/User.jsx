import React, { useState } from 'react'
import { followUser, unfollowUser } from '../../store/userAction';
import { useDispatch, useSelector } from 'react-redux';



const User = ({ person }) => {

    const publicFolder = process.env.REACT_APP_PUB;
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth.authData)
    const [isFollowing, setIsFollowing] = useState(person.followers.includes(user._id));


    const handleFollow = () => {
        console.log(isFollowing);
        if(isFollowing){
            dispatch(unfollowUser(person._id, user))
            setIsFollowing(false)
        }else {
            dispatch(followUser(person._id, user))
            setIsFollowing(true)
        }
    }


    return (
        <div className='follower'>
            <div>
                <img src={person?.profilePicture && publicFolder + person.profilePicture } alt="" />
                <div className='follower-name'>
                    <span>{person.firstName} {person.lastName} </span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className='button fc-button' onClick={handleFollow}>{isFollowing? 'Unfollow' : 'Follow' }</button>
        </div>
    )
}

export default User