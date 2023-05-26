import * as postApi from '../api/postRequest.js'
import { post } from './postSlice.js';

export const getTimelinePosts = (id) => async(dispatch) => {
    dispatch(post.retrieveStart());
    try {
        dispatch(post.retrieveStart());
        const {data} = await postApi.postTimeline(id);
        console.log(data);
        dispatch(post.retrieve(data));
    } catch (error) {
        dispatch(post.retrieveFail());
        console.log(error);
    }   
}