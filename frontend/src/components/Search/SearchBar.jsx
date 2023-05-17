import React from 'react'
import './SearchBar.css'
import Logo from '../../img/logo1.png'
import {UilSearch} from '@iconscout/react-unicons';

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <img src={Logo} style={{width: '70px'}}/>
        <div className='search'>
            <input type="text" placeholder='#Explore' />
            <div className='search-icon'>
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar