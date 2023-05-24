import * as AuthApi from '../api/AuthRequest.js';
import { auth } from './authSlice.js';


export const login = (formData) => async(dispatch) => {
    try {
        const {data} = await AuthApi.login(formData);
        dispatch(auth.authSuccess(data));
    } catch (error) {
        console.log(error);
        // dispatch()
    } 
}
export const register = (formData) => async(dispatch) => {
    try {
        const {data} = await AuthApi.register(formData);
        dispatch({type: "AUTH_SUCCESS", data:data})
    } catch (error) {
        console.log(error);
        dispatch({type: "AUTH_FAIL"})
    } 
}
