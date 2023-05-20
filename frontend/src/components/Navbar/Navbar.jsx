import React from 'react'
import SearchBar from '../Search/SearchBar'
import Home from "../../img/home.png";
import Notif from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import "./Navbar.css"




const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='navbar-elements'>
       <SearchBar/>
     

     <div className='nav-icons'>
         <img src={Home} alt="" />
         <UilSetting/>
         <img src={Notif} alt="" />
         <img src={Comment} alt="" />
     </div>
       </div>



    </div>
  )
}

export default Navbar