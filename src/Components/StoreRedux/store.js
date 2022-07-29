import { configureStore } from "@reduxjs/toolkit"
import useReducer from "./Slice/UserSlice";

const store = configureStore({
    reducer:{
        user : useReducer,
    }
})

export default store;