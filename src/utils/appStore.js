import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskSliceReducer from "./tasksSlice";
import uiSliceReducer from "./uiSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    taskSlice:taskSliceReducer,
    uiSlice:uiSliceReducer,
  },
});

export default appStore;
