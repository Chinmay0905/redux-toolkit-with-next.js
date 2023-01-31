import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
         users: []
}

export const userSlice = createSlice({
        name: 'users',
        initialState,
        reducers: {
                addUser : (state, action) => { 
                        state().concat(action.payload)
                        }
              },
})


export const { addUser} = userSlice.actions

export default userSlice.reducer