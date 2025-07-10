import { createSlice } from "@reduxjs/toolkit";

//!initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  //!reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

//!geerate actions
export const { loginAction, logoutAction } = authSlice.actions;
//!generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;
