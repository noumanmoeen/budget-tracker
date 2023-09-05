import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './features/users/UserSlice';
 

export const store = configureStore({
    reducer: {
        users: postsReducer,
     }
})