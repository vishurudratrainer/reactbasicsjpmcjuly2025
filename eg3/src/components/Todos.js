
import { useSelector, useDispatch } from "react-redux";

const Todos = ()=>{
    const dispatch=useDispatch()
    const data = useSelector(state=>state.todos.todos)
    const fetchTodo=()=>dispatch({type:"FETCH_TODO"})

    return(<div>
        <button onClick={fetchTodo}> FETCH TODOS</button>
        <h1>{JSON.stringify(data)}</h1>
    </div>)
}

export default Todos
