import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilk: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilk = state.numOfMilk - action.payload;
    },
  },
});

export const { buyMilk } = milkSlice.actions;
export default milkSlice.reducer;
