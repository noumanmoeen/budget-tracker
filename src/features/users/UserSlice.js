import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../http';


export const loginUser = createAsyncThunk('user/login', async (actionData) => {
  const response = await axiosInstance.post('/api/users/login', {
    ...actionData.credentials,
  });
  const { data = {}, status = 0, statusText = '' } = response;
  if(status === 200)
  {

  }
  return { data, status, statusText , onSuccess: actionData.onSuccess };
});

const initialState = {
  user: {
    name: 'nouman',
  },
  status: 'idle',
  isLoggedIn: false,
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoggedInStatus(state, action) {
      let loggedIn = localStorage.getItem('isLoggedIn');
      loggedIn = Boolean(loggedIn) ? JSON.parse(loggedIn) : false;
      state.isLoggedIn = loggedIn;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = 'success';
        const token = action.payload?.data?.token || '';
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('token', token);
        state.user = action.payload;
        state.isLoggedIn = true
        action.payload.onSuccess()
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = 'failed';
      });
  },
});

export const { setLoggedInStatus } = usersSlice.actions;

export const getUserData = (state) => state.users.user;
export const getUserStatus = (state) => state.users.status;
export const getUserLoggedInStatus = (state) => state.users.isLoggedIn;

export default usersSlice.reducer;
