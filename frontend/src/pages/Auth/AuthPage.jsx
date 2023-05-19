import React from 'react'
import './AuthPage.css'
import Logo from '../../img/logo1.png'
import { useForm } from 'react-hook-form';




function SignUp(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return(
    <div>
      <form className='info-form signup-form' onSubmit={(data) => console.log(data)}>
        <h3>Sign up</h3>
        <div>
          <input {...register('firstName')} 
                type="text" 
                placeholder='First Name'
                className='info-input'
                name='firstName'
                />
          <input {...register('lastName')} 
                type="text" 
                placeholder='Last Name'
                className='info-input'
                name='lastName'
                />
        </div>

        <div>
          <input className="info-input" type="text" name="username" id="" placeholder='Username' {...register('userName')}/>
        </div>
        <div>
          <input className="info-input" type="email" name="email" id="" placeholder='Email' {...register('email')}/>
        </div>
        <div>
          <input className="info-input" type="password" name="password" id="" placeholder='Password' {...register('password')}/>
        </div>
        <div>
          <input className="info-input" type="password" name="confirmPassword" id="" placeholder='Confirm Password' {...register('confirmPassword')}/>
        </div>
        <div>
          <span style={{fontSize: '12px'}}>Already a member ? Login.</span>
        </div>
        <input className='button signup-button' type='submit' value="Sign up"/>
      </form>
    </div>
  )
}

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
        <SignUp/>
    </div>
  )
}

export default AuthPage