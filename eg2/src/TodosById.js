import { useState } from "react";
import TodosTable from "./TodosTable";


const TodosById =()=>{
    const [todos,setTodos] = useState([])
    const captureChange = e =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.value}`)
        .then(res=>res.json())
        .then(res=>setTodos([res]))
    return(<div>
        <label>Enter todo id <input onChange={captureChange} /></label>
        <br/>
        <TodosTable todos={todos}/>
    </div>)

}

export default TodosById

