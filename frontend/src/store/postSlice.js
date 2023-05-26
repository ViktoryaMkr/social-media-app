import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    postData: [],
    error: false,
    loading:false
}

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        retrieve(state, action) {
            // console.log(action);
            state.postData = action.payload;
            state.error = false;
            state.loading = false;
        },
        retrieveFail(state) {
            state.error = true;
            state.loading = false;
        },
        retrieveStart(state) {
            state.error = true;
            state.loading = true;
        }
    },
});

export const post = postSlice.actions
export default postSlice.reducer