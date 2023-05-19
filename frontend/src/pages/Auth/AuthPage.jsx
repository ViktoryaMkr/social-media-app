import React from 'react'
import './AuthPage.css'
import Logo from '../../img/logo1.png'

const AuthPage = () => {
  return (
    <div className='auth'>
      <div className='auth-left-section'>
        <img src={Logo} alt="" />
        <div className='app-name'>
          <h1>BuzzWave Network</h1>
          <h6>Making Waves, Creating Buzz, Connecting You</h6>
        </div>
      </div>
        <h1>Form</h1>
    </div>
  )
}

export default AuthPage