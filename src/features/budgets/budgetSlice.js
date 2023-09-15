import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../http';

// console.log(API_URL)
export const fetchUserBudgets = createAsyncThunk(
  'fetchUserBudgets',
  async () => {
    const response = await axiosInstance.get(`/api/budgets`);
    const { data = {}, status = 0, statusText = '' } = response;
    return { data, status, statusText };
  }
);

export const addBudget = createAsyncThunk('add_budget', async (actionData) => {
  const response = await axiosInstance.post('/api/budgets', {
    ...actionData,
  });
  const { data = {}, status = 0, statusText = '' } = response;
  return { data, status, statusText };
});

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
      })
      .addCase(fetchUserBudgets.fulfilled, (state, action) => {
        state.status = 'success';
      
        state.budgets = action.payload.data.budgets;
      })
      .addCase(fetchUserBudgets.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(addBudget.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addBudget.fulfilled, (state, action) => {
        state.status = 'success';
      })
      .addCase(addBudget.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {} = budgetsSlice.actions;

export const getBudgetsStatus = (state) => state.budgets.status;
export const getBudgets = (state) => state.budgets.budgets;

export default budgetsSlice.reducer;
