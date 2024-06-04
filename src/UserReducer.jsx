import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
import { act } from "react";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            /* console.log(action); */
            // pushiamo nello state atttuale il payload della variabile action
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            // update dello stato
            const updUser = state.find(user => user.id == id);
            if(updUser) {
                updUser.name = name;
                updUser.email = email;
            }
        }
    }
})

export const {addUser, updateUser} = userSlice.actions;
export default userSlice.reducer;