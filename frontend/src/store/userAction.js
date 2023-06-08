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

export const followUser = (id, data) => async(dispatch)=>{
    // dispatch(auth.followUser(data));
    userApi.followUser(id, data)

}
export const unfollowUser = (id, data) => async(dispatch)=>{
    // dispatch(auth.unfollowUser(data));
    userApi.unfollowUser(id, data)

}

