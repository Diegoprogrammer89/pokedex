import { createSlice } from '@reduxjs/toolkit'


export const nameUserSlice = createSlice ({
    name: 'nameUser',
    initialState: '',
    reducers: {
        setName: (state, action) => action.payload
    }
})


export const { setName } = nameUserSlice.actions
export default nameUserSlice.reducer