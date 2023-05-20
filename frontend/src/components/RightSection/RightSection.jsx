import React from 'react'
import "./RightSection.css"
import TrendCard from '../Cards/TrendCard/TrendCard';

const RightSection = () => {
  return (
    <div className='right-section'>
        
            <TrendCard/>

            <button className='button r-button'>
                Share
            </button>
        
    </div>
  )
} 

export default RightSection