import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";
const appStore = configureStore({
  reducer: {
    uiSlice:uiSliceReducer,
  },
});

export default appStore;
