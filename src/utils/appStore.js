import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskSliceReducer from "./tasksSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    taskSlice:taskSliceReducer,
  },
});

export default appStore;
