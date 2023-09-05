import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchUserById = createAsyncThunk(
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
  users: [],
  loading: 'idle',
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        state.loading = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'success';
         state.users = action.payload
      })
  },
});

export const {} = usersSlice.actions;

export const getPostsStatus = (state) => state.users.loading;

export default usersSlice.reducer;