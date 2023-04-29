import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{
        email: "",
        firstName: "",
        lastName: "",
        token: "",
    },
    reducers:{
        login: (state, action) => {
            const { email, firstName, lastName } = action.payload
            state.email = email
            state.firstName = firstName
            state.lastName = lastName
        },
        edit: (state, action) => {
            const { firstName, lastName} = action.payload
            state.firstName = firstName
            state.lastName = lastName
        },
        saveToken: (state, action) => {
            const { token } = action.payload
            state.token = token
        }, 
        logout: (state, action) => {
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.token = "";
        }
    },
})

export const { login, edit, saveToken, logout } = userSlice.actions;

export const selectUser = (state) => state.user

export default userSlice.reducer

