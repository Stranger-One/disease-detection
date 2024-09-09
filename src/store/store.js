import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import weatherSlice from "./weatherSlice";


const store = configureStore({
    reducer: {
        global: globalSlice,
        weather: weatherSlice,

    }
})

export default store