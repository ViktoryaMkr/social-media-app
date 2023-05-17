import React from 'react'
import './SharePost.css';
import ShareImg from '../../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'

const SharePost = () => {
    return (
        <div className='share-post'>
            <img src={ShareImg} alt="" />
            <div>
                <input type='text' placeholder='Express yourself' />
            </div>
            <div className='post-options'>
                <div className='share-options'>
                    <div className='option'>
                        <UilScenery />
                        Picture
                    </div>
                    <div className='option'>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className='option'>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className='option'>
                        <UilSchedule />
                        Schedule
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharePost