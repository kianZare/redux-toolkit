import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk("user/getAsyncUsers", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

 const userSlice =createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAsyncUsers.pending]: (state, action) => {
      state.loading = true;
      state.data = []
      state.error = ""
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAsyncUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = []
    },
  },
});



export default userSlice.reducer;