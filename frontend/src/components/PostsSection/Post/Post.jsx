import React, { useState } from 'react'
import './Post.css'
import Comment from '../../../img/comment.png'
import Share from '../../../img/share.png'
import Like from '../../../img/like.png'
import Dislike from '../../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../../api/postRequest'


const Post = ({ data }) => {


    const {user} = useSelector(state => state.auth.authData);

    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likeNumber, setLikeNumber] = useState(data.likes.length);

    const handleLikes = () => {
        setLiked(prev => !prev);
        likePost(data._id, user._id);
        // liked? setLiked(prev => prev - 1): setLiked(prev => prev + 1)
    }


    console.log(data);
    return (
        <div className='post'>
            <div className='details'>
                <span><b>{data.name}</b></span>
                <span>{data.description}</span>
            </div>
            <img src={data.image? `${process.env.REACT_APP_PUB}${data.image}` : ''} alt="" />
            <div className='post-reaction'>
                <img src={liked ? Like : Dislike} alt="" style={{cursor: 'pointer'}} onClick={handleLikes}/>
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{color: "var(--gray", fontSize: '12px'}}>
                {likeNumber} Likes
            </span>

        </div>
    )
}

export default Post