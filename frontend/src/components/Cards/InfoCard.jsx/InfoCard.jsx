import React from 'react'
import "./InfoCard.css"
import {UilPen} from '@iconscout/react-unicons'


const InfoCard = () => {
  return (
    <div className='info-card'>
        <div className='info-head'>
            <h4>Your profile info</h4>
            <div>
            <UilPen width='2rem' />
            </div>
        </div>
        <div className='info'>
            <span>
                <b>Status </b>
            </span>
            <span>Single</span>
        </div>
        <div className='info'>
            <span>
                <b>Location </b>
            </span>
            <span>Montreal Qc</span>
        </div>
        <div className='info'>
            <span>
                <b>Work </b>
            </span>
            <span>Senior Software Engineer</span>
        </div>

        <button className='button info-button'>button</button>

    </div>
  )
}

export default InfoCard