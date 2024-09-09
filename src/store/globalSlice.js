import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        navigationMenu: false,
    },
    reducers:{
        toggleMenu: (state, action)=>{
            state.navigationMenu = !state.navigationMenu
        },
        closeMenu: (state, action)=>{
            state.navigationMenu = false
        },
    }

})

export const {toggleMenu, closeMenu} = globalSlice.actions;
export default globalSlice.reducer;