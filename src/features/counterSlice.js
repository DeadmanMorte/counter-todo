import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return {value: state.value + 1}
        },
        decrement: (state) => {
            return {value: state.value - 1}
        },
    
        incrementCustom: (state,action) => {
        return {value: state.value + action.payload}
        }
    }     
})

export const { increment, decrement, incrementCustom } = counterSlice.actions

export default counterSlice.reducer