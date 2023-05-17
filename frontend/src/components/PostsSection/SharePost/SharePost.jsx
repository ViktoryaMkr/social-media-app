import React, { useRef, useState } from 'react'
import './SharePost.css';
import ShareImg from '../../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const SharePost = () => {


    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }


    }
    return (
        <div className='share-post'>
            <img src={ShareImg} alt="" />
            <div>
                <input type='text' placeholder='Username Express yourself' />
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
                    <button className='button postshare-button'>
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
                        <img src={image.image} alt="" />

                    </div>

                }
            </div>
        </div>
    )
}

export default SharePost