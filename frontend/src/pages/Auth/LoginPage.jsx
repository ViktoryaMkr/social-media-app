import React from 'react'
import './AuthPage.css'
import { useForm } from 'react-hook-form';
import { login } from '../../store/AuthAction';

import { useDispatch } from 'react-redux';

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const handleLoginUser = data => {
        dispatch(login(data));
    }


    return (
        <div>
            <form className='info-form signup-form' onSubmit={handleSubmit(handleLoginUser)}>
                <h3>Log in</h3>

                <div>
                    <input className="info-input" type="text" name="username" id="" placeholder='Username' {...register('username')} />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" id="" placeholder='Password' {...register('password')} />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Not a member yet ? Sign up.</span>
                    <input className='button login-button' type='submit' value="Log in" />
                </div>
            </form>
        </div>
    )
}

export default Login