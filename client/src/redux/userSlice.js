import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signinSuccess: (state, action)=>{
         state.currentUser = action.payload
        },
        signupSuccess: (state, action)=>{
         state.currentUser = action.payload
        }
    }
})
 
export const {signinSuccess, signupSuccess} = userSlice.actions;
export default userSlice.reducer;