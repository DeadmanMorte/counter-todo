import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    items: []
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            return {items: [...state.items, action.payload]}
            },
        subTodo: (state,action) => {
            let array = [...state.items]
            let index = action.payload
            if(action.payload){
                array.splice(index, 1)
                return {items:array}
            }
            return {value: state.value + action.payload}
           },
        clearTodo: () => {
            return {items: []}
            }
    }
})

export const { addTodo, subTodo, clearTodo } = todoSlice.actions

export default todoSlice.reducer

