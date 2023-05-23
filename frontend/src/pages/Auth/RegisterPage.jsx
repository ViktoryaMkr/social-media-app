import React from 'react'
import './AuthPage.css'
import Logo from '../../img/logo1.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    password: yup.string()
      .required("Password is required"),
      confirmPassword: yup.string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords do not match")
  });

function SignUp(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } =  useForm({
        resolver: yupResolver(schema)
      });
  
  function name(data) {
    console.log(data);
  }
    return(
      <div>
        <form className='info-form signup-form' onSubmit={handleSubmit(name)}>
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
            <p className='error'>{errors.confirmPassword?.message}</p>
          <div>
            <span style={{fontSize: '12px'}}>Already a member ? Login.</span>
          </div>
          <input className='button signup-button' type='submit' value="Sign up"/>
        </form>
      </div>
    )
  }

export default SignUp