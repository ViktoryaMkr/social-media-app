import * as uploadApi from '../api/uploadRequest.js'
import { sharePost } from './uploadSlice.js';

export const uploadImage = data => async(dispatch)=>{
    try {
        await uploadApi.uploadImage(data);
    } catch (error) {
        console.log(error);
    }
}

export const shareUserPost = data => async(dispatch)=>{
    try {
        const newPost = await uploadApi.sharePost(data);
        console.log(newPost);
        dispatch(sharePost.sharePost(newPost.data));
        
    } catch (error) {
        console.log(error);
    }
}