import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../http';
 
// console.log(API_URL)
 export const fetchUserBudgets = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
      const response = await axiosInstance.get(`/api/budgets`);
      const parsedRes = await response.json();
      return parsedRes;
  }
);

const initialState = {
  budgets: [],
  status: 'idle',
  message: '',
};

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserBudgets.pending, (state, action) => {
        state.status = 'loading';
        console.log('HERE 7')
      })
      .addCase(fetchUserBudgets.fulfilled, (state, action) => {
        state.status = 'success';
        state.budgets = action.payload;
      })
      .addCase(fetchUserBudgets.rejected, (state, action) => {

        state.status = 'failed';
      });
  },
});

export const {} = budgetsSlice.actions;

export const getBudgetsStatus = (state) => state.users.status;
export const getBudgets = (state) => state.users.budgets;

export default budgetsSlice.reducer;
