import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name:null,
    photo:null,
    email:null, 
    uid:null,
    user:null
}
const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setLogIn:(state,action) =>{
            state.name=action.payload.name;
            state.photo=action.payload.photo;
            state.email=action.payload.email;
            state.uid=action.payload.uid;
        },
        setLogOut:(state)=>{
            state.name=null;
            state.photo=null;
            state.email=null;
            state.uid=null;
        },
        setRegisterWithEmail:(state,action)=>{
             state.email=action.payload.email;
             state.fullName=action.payload.fullName;
             state.username=action.payload.username;
             state.password=action.payload.password;
             state.uid=action.payload.uid;
        },
        login: (state, action) => {
            state.user = action.payload;
          },
    
    }
})
export const {setLogIn,setLogOut,setRegisterWithEmail,login} =UserSlice.actions
export const selectName = (state)=>state.user.name
export const selectPhoto = (state)=>state.user.photo

export const selectEmail = (state)=>state.user.email
export const selectUid = (state)=>state.user.uid
export default UserSlice.reducer