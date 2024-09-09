import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        navigationMenu: false,
    },
    reducers:{
        toggleMenu: (state, action)=>{
            state.navigationMenu = !state.navigationMenu
        }
    }

})

export const {toggleMenu} = globalSlice.actions;
export default globalSlice.reducer;