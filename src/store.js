import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/UserSlice';
import budgetsReducer from './features/budgets/budgetSlice';
 

export const store = configureStore({
    reducer: {
        budgets: budgetsReducer,
        users: usersReducer
     }
})