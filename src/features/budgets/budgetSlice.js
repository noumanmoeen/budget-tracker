import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../http';

// console.log(API_URL)
export const fetchUserBudgets = createAsyncThunk(
  'fetchUserBudgets',
  async () => {
    const response = await axiosInstance.get(`/api/budgets`);
    const { data = { }, status = 0, statusText = '' } = response;
    return { data, status, statusText };
  }
);

export const getBudgetDetails = createAsyncThunk(
  'getBudgetDetails',
  async (budgetId) => {
    const response = await axiosInstance.get(`/api/budgets/${budgetId}`);
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
  loading : false,
  message: '',
  currentBudget: {},
};

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserBudgets.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true
      })
      .addCase(fetchUserBudgets.fulfilled, (state, action) => {
        state.status = 'success';
        state.loading = false
        state.budgets = action.payload.data.budgets;
      })
      .addCase(fetchUserBudgets.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false
      })
      .addCase(addBudget.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true
      })
      .addCase(addBudget.fulfilled, (state, action) => {
        state.status = 'success';
        state.loading = false
      })
      .addCase(addBudget.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false
      })
      .addCase(getBudgetDetails.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true
      })
      .addCase(getBudgetDetails.fulfilled, (state, action) => {
        state.status = 'success';
        state.loading = false
        state.currentBudget = action?.payload?.data?.budget
      })
      .addCase(getBudgetDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false
      });
  },
});

export const {} = budgetsSlice.actions;

export const getBudgetsStatus = (state) => state.budgets.status;
export const getBudgets = (state) => state.budgets.budgets;
export const getCurrentBudget = (state) => state.budgets.currentBudget;

export default budgetsSlice.reducer;
