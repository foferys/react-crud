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
        },
        delUser: (state, action) => {
            const indice = state.find(item => item.id == action.payload);
            
            if(indice) {
                console.log(indice);
                state.splice(indice, 1);
            }
        }
    }
})

export const {addUser, updateUser, delUser} = userSlice.actions;
export default userSlice.reducer;