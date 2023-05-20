import React from 'react'
import './Post.css'
import Comment from '../../../img/comment.png'
import Share from '../../../img/share.png'
import Like from '../../../img/like.png'
import Dislike from '../../../img/notlike.png'


const Post = ({ data }) => {
    return (
        <div className='post'>
            <div className='details'>
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
            <img src={data.img} alt="" />
            <div className='post-reaction'>
                <img src={data.liked ? Like : Dislike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{color: "var(--gray", fontSize: '12px'}}>
                {data.likes} Likes
            </span>

        </div>
    )
}

export default Post