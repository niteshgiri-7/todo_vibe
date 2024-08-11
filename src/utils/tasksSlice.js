import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskBoolean: false,
    deleteTaskBoolean:false,
    allTasks: null,
  },
  reducers: {
    toggleAddTask: (state, action) => {
      state.taskBoolean = !state.taskBoolean;
    },
    addTaskFromBackend: (state, action) => {
      state.allTasks = action.payload;
    },
    deleteTaskActivate:(state,action)=>{
      state.deleteTaskBoolean=!state.deleteTaskBoolean;
    }
  },
});

export const { toggleAddTask, addTaskFromBackend ,deleteTaskActivate} = taskSlice.actions;
export default taskSlice.reducer;
