import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchUserBudgets = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const parsedRes = await response.json();
    return parsedRes;
  }
);

const initialState = {
  budgets: [],
  status: 'idle',
  message: ''
};

// Then, handle actions in your reducers:
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
         state.budgets = action.payload
      }).addCase(fetchUserBudgets.rejected, (state, action) => {
        state.status = 'idle';
         state.budgets = action.payload
      })
  },
});

export const {} = usersSlice.actions;

export const getBudgetsStatus = (state) => state.users.status;
export const getBudgets = (state) => state.users.budgets;

export default budgetsSlicexs.reducer;