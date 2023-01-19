import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "auth",
    initialState:{
        email: "",
        firstName: "",
        lastName: "",
        user: null,
        token: null
    },
    reducers:{
        login: (state, action) => {
            const { email, token, firstName, lastName } = action.payload
            state.email = email
            state.firstName = firstName
            state.lastName = lastName
            state.token = token
            state.isLogged = true;
        },
    },
})

export const {  login } = userSlice.actions;

export default userSlice.reducer

export const selectUser = (state) => state.user
export const selectCurrentToken = (state) => state.user.token