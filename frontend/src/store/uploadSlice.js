import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    postData: [],
    error: false
}

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        sharePost(state, action) {
            console.log(action);
            state.postData.push(action.payload);
            state.error = false;
        },
        sharePostFail(state) {
            state.error = true;
        },
    },
});

export const sharePost = postSlice.actions
export default postSlice.reducer