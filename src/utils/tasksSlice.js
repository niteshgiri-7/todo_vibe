import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"tasks",
    initialState:{
        addTaskBoolean:false,
    },
     reducers:{
        toggleAddTask:(state,action)=>{
          state.addTaskBoolean=!state.addTaskBoolean;
        }
     }
})

export const {toggleAddTask}=taskSlice.actions;
export default taskSlice.reducer;