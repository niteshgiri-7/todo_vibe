import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"uiSlice",
    initialState:{

        showItem:"Main Boards",
        showChangePassword:false,
    },
    reducers:{
        addShowItem:(state,action)=>{
            state.showItem = action.payload;
        },
        setShowChangePassword:(state)=>{
            state.showChangePassword=!state.showChangePassword;
        }
    }
});

export const {addShowItem,setShowChangePassword} = uiSlice.actions;
export default uiSlice.reducer;