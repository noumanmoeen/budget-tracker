import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './features/sampleSlices/UserSlice';
 

export const store = configureStore({
    reducer: {
        users: postsReducer,
     }
})