import React from 'react'
import "./RightSection.css"
import Home from "../../img/home.png";
import Notif from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';

const RightSection = () => {
  return (
    <div className='right-section'>
        <div className='nav-icons'>
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Notif} alt="" />
            <img src={Comment} alt="" />
        </div>
            <TrendCard/>

            <button className='button r-button'>
                Share
            </button>
        
    </div>
  )
} 

export default RightSection