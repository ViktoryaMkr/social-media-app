import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authData: null,
  loading: false,
  error: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    startAuth(state) {
      state.loading = true;
      state.error = false;
    },
    authSuccess(state, action) {
      localStorage.setItem("profile", JSON.stringify(action.payload))
      state.authData = action.payload;
      state.loading = false;
      state.error = false;
    },
    authFail(state) {
      state.loading = false;
      state.error = true;
    },
    logout(state) {
      localStorage.clear();
      state.authData = null;
      state.loading = false;
      state.error = false;
    },
    updateUser(state, action) {
      localStorage.setItem('profile', JSON.stringify(action.payload))
      state.authData = action.payload;
      state.error = false;
    },
    updateFail(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const auth = authSlice.actions
export default authSlice.reducer