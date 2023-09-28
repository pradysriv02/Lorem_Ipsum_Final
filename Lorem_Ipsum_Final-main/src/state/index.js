import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:null,
    token:null,
    items:[],
    loginModal:false,
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout:(state) => {
            state.user=null;
            state.token=null;
        },
        setItems: (state,action) => {
            state.items = action.payload.items;
        },
        setLoginModal: (state,action) => {
            state.loginModal=!state.loginModal;
        }
    }
});

export const {setLogin,setLogout,setItems,setLoginModal} = authSlice.actions;
export default authSlice.reducer;