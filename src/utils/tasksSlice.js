import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskBoolean: false,
    deleteTaskBoolean:false,
    editTaskBoolean:false,
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
    },
    editTaskActivate:(state)=>{
      state.editTaskBoolean=!state.editTaskBoolean;
    },
    removeTasksDuringLogout:(state)=>{
      state.allTasks = null;
    }
  },
});

export const { toggleAddTask, addTaskFromBackend ,deleteTaskActivate,editTaskActivate,removeTasksDuringLogout} = taskSlice.actions;
export default taskSlice.reducer;
