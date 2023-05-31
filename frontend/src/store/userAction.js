import * as userApi from '../api/userRequest.js'
import { auth } from './authSlice.js';



export const updateUserProfileInfo = (id, formData) => async(dispatch)=>{
    try {
        const {data} = await userApi.updateUser(id, formData);
        dispatch(auth.updateUser(data));
        
    } catch (error) {
        dispatch(auth.updateFail());
    }
}

