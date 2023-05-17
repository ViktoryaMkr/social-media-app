import React from 'react'
import './FollowerCard.css'
import { Followers } from '../../MockData/MockFollowersData'


const FollowerCard = () => {
    return (
        <div className='follower-card'>
            <h3>Your followers</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className='follower'>
                        <div>
                            <img src={follower.img} alt="" />
                            <div className='follower-name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}

        </div>
    )
}

export default FollowerCard