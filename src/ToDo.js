import React, {useState} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { addTodo,subTodo,clearTodo } from "./features/todoSlice";

function ToDo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const showItems = items.map((item, index) => <li key={index} onClick={() => dispatch(subTodo(index))}>{item}</li>)

    const toDoAdd = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <h1> TODO LIST</h1>
            <button onClick={() => dispatch(clearTodo())}> Clear List</button>
            <form onSubmit={(e) => toDoAdd(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type='submit' onClick={console.log(input)}>Submit</button>
            </form>
            <ul>
                {showItems}
            </ul>
            
        </div>
    )
}

export default ToDo

