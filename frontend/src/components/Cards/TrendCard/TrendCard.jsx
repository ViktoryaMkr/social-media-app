import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../../MockData/MockTrendData'




const TrendCard = () => {
  return (
    <div className='trend-card'>
        <h3>Current Trends</h3>

        { TrendData.map((trend)=> {
            return (
                <div className='trend'>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}M</span>
                </div>
            )
        })}

    </div>
  )
}

export default TrendCard