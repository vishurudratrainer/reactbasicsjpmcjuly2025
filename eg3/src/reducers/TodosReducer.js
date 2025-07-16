
import { FETCHED_TODO } from "../components/ActionType"
const TodosReducer=(state={todos:[]},action)=>{
    if(action){
        if(action.type ===FETCHED_TODO){
            return {...state,todos:action.data}
        }
    }
    return state
}

export default TodosReducer