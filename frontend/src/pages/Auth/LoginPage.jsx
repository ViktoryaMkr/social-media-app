import React from 'react'
import './AuthPage.css'
import Logo from '../../img/logo1.png'
import { useForm } from 'react-hook-form';


function Login(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
  
    return(
      <div>
        <form className='info-form signup-form' onSubmit={(data) => console.log(data)}>
          <h3>Log in</h3>
          
          <div>
            <input className="info-input" type="text" name="username" id="" placeholder='Username' {...register('userName')}/>
          </div>
          <div>
            <input className="info-input" type="password" name="password" id="" placeholder='Password' {...register('password')}/>
          </div>
          <div>
            <span style={{fontSize: '12px'}}>Not a member yet ? Sign up.</span>
          <input className='button login-button' type='submit' value="Log in"/>
          </div>
        </form>
      </div>
    )
  }

export default Login