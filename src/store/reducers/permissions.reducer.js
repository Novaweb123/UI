import {createSlice} from '@reduxjs/toolkit'

export const permissionsSlice = createSlice({
    name: 'permissions',
    initialState: {
        permissions: null
    },
    reducers: {
        setPermissions: (state, action) => {
            state.permissions = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {setPermissions} = permissionsSlice.actions

export default permissionsSlice.reducer
