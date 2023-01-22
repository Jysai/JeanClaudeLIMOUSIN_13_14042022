import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{
        email: "",
        firstName: "",
        lastName: "",
        token: ""
    },
    reducers:{
        login: (state, action) => {
            const { email, token, firstName, lastName } = action.payload
            state.email = email
            state.firstName = firstName
            state.lastName = lastName
            state.token = token
        },
        edit: (state, action) => {
            const { firstName, lastName} = action.payload
            state.firstName = firstName
            state.lastName = lastName
        }
        
    },
})

export const { login, edit } = userSlice.actions;

export const selectUser = (state) => state.user

export default userSlice.reducer

