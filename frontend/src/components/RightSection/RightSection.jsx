import React from 'react'
import "./RightSection"
import Home from "../../img/home.png";
import Notif from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";


const RightSection = () => {
  return (
    <div className='right-section'>
        <div className='navIcons'>
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Notif} alt="" />
            <img src={Comment} alt="" />

        </div>
        
    </div>
  )
} 

export default RightSection