import { configureStore } from "@reduxjs/toolkit";
import { mealapi } from "./MealApi";


export const store=configureStore({
  reducer:{
    [mealapi.reducerPath]:mealapi.reducer,
  },
  middleware:(getDefault)=>getDefault().concat(mealapi.middleware)
})

