import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading:false
}

export const appslice = createSlice({
    name:"app",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

    }
})
export const { } = appslice.actions

export default appslice.reducer