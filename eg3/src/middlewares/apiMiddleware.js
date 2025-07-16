const apiMiddlware =({dispatch})=>next=>action=>{
    if(action){
        if(action.type==="FETCH_TODO"){
            fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(res=>res.json())
            .then(res=>dispatch({type:"FETCHED_TODO",data:res}))
        }
    }
    next(action)//next is used to go to next middleware in chain. If not it will go tot the reducer
}


export default apiMiddlware