import { useSelector, useDispatch } from "react-redux";
import { GET_DOG } from "./ActionType";


const Dog =()=>{
    const data = useSelector(state=>state.dog)
    const dispatch=useDispatch()
    const getDog=()=>dispatch({type:GET_DOG})

    return(<div>
        <button onClick={getDog}>Click to get Dog</button><br/>
        <img src={data.message} alt="None"/>
    </div>)
}

export default Dog

