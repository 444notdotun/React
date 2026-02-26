import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../slices/counterSlices";

export const store = configureStore({
    reducer:{
        counter: counterslice.reducer
    }
})