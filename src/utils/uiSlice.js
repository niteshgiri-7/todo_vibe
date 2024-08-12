import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"uiSlice",
    initialState:{

        showItem:"Main Boards",
    },
    reducers:{
        addShowItem:(state,action)=>{
            state.showItem = action.payload;
        }
    }
});

export const {addShowItem} = uiSlice.actions;
export default uiSlice.reducer;