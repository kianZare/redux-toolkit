import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";
import milkReducer  from "./milk/milkSlice";
import userSlice from "./user/userSlice";



const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: milkReducer ,
    users: userSlice
  },
})

export default store;
