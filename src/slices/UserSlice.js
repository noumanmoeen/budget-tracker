
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const parsedRes = await response.json()
    return parsedRes
  }
)

 

const initialState = {
  entities: [],
  loading: 'idle',
} 

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

