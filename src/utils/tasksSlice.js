import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    addTaskBoolean: false,
    allTasks: null,
  },
  reducers: {
    toggleAddTask: (state, action) => {
      state.addTaskBoolean = !state.addTaskBoolean;
    },
    addTaskFromBackend: (state, action) => {
      state.allTasks = action.payload;
    },
  },
});

export const { toggleAddTask, addTaskFromBackend } = taskSlice.actions;
export default taskSlice.reducer;
