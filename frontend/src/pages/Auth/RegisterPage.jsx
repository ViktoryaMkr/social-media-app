import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { register as registerAction } from '../../store/AuthAction';
import './AuthPage.css'



const schema = yup.object({
    password: yup.string()
        .required("Password is required"),
    confirmPassword: yup.string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Passwords do not match")
});


function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();

    const handleRegisterUser = data => {
        console.log(data);
        dispatch(registerAction(data));
    }


    return (
        <div>
            <form className='info-form signup-form' onSubmit={handleSubmit(handleRegisterUser)}>
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
                    <input className="info-input" type="text" name="username" id="" placeholder='Username' {...register('username')} />
                </div>
                <div>
                    <input className="info-input" type="email" name="email" id="" placeholder='Email' {...register('email')} />
                </div>
                <div>
                    <input className="info-input" type="password" name="password" id="" placeholder='Password' {...register('password')} />
                </div>
                <div>
                    <input className="info-input" type="password" name="confirmPassword" id="" placeholder='Confirm Password' {...register('confirmPassword')} />
                </div>
                <p className='error'>{errors.confirmPassword?.message}</p>
                <div>
                    <span style={{ fontSize: '12px' }}>Already a member ? Login.</span>
                </div>
                <input className='button signup-button' type='submit' value="Sign up" />
            </form>
        </div>
    )
}

export default SignUp