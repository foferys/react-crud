import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            /* console.log(action); */
            // pushiamo nello state atttuale il payload della variabile action
            state.push(action.payload);
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;