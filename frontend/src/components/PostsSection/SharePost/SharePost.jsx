import React, { useRef, useState } from 'react'
import './SharePost.css';
import ShareImg from '../../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../../store/uploadAction';

const SharePost = () => {

    const dispatch = useDispatch();
    const imageRef = useRef();
    const postDescription = useRef();
    const [image, setImage] = useState(null);
    const { user }  = useSelector(state => state.auth.authData);



    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage(img);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId : user._id,
            description: postDescription.current.value
        }

        if(image){
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            // console.log(newPost);
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }

    }



    return (
        <div className='share-post'>
            <img src={ShareImg} alt="" />
            <div>
                <input type='text' placeholder='Username Express yourself' required ref={postDescription}/>
                <div className='post-options'>
                    <div className='share-options'>
                        <div className='option'
                            style={{color: 'var(--photo)'}}
                            onClick={()=>imageRef.current.click()}
                        >
                            <UilScenery />
                            Picture
                        </div>
                        <div className='option'
                         style={{color: 'var(--video)'}}
                        >
                            <UilPlayCircle />
                            Video
                        </div>
                        <div className='option'
                         style={{color: 'var(--location)'}}
                        >
                            <UilLocationPoint />
                            Location
                        </div>
                        <div className='option'
                         style={{color: 'var(--shedule)'}}
                        >
                            <UilSchedule />
                            Schedule
                        </div>
                    <button className='button postshare-button' onClick={handleSubmit}>
                        Share
                    </button>
                    <div style={{display: 'none'}}>
                        <input type="file" name='my-image' onChange={onImageChange} ref={imageRef}/>
                    </div>
                    </div>
                </div>

                {image && 
                    <div className='image-preview'>
                        <UilTimes onClick={()=>setImage(null)} />
                        <img src={ URL.createObjectURL(image)} alt="" />

                    </div>

                }
            </div>
        </div>
    )
}

export default SharePost