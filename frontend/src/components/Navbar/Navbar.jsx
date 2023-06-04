import React from 'react'
import SearchBar from '../Search/SearchBar'
import Home from "../../img/home.png";
import Notif from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import "./Navbar.css"
import { Link, Redirect  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../store/authSlice.js'



const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(auth.logout());
  }

  return (
    <div className='navbar'>
       <div className='navbar-elements'>
       <SearchBar/>
     

     <div className='nav-icons'>
      <Link to='/'>
         <img src={Home} alt="" />
      </Link>
         <UilSetting/>
         <img src={Notif} alt="" />
         <img src={Comment} alt="" />
         <span onClick={handleLogout} style={{cursor: 'pointer'}}>Log out</span>
     </div>
       </div>



    </div>
  )
}

export default Navbar