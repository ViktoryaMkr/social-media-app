import React from 'react'
import './Post.css'
import Comment from '../../../img/comment.png'
import Share from '../../../img/share.png'
import Like from '../../../img/like.png'
import Dislike from '../../../img/notlike.png'


const Post = ({ data }) => {
    return (
        <div className='post'>
            <img src={data.img} alt="" />
            <div className='post-reaction'>
                <img src={data.liked ? Like : Dislike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span>
                {data.likes} Likes
            </span>

            <div className='details'>
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
        </div>
    )
}

export default Post