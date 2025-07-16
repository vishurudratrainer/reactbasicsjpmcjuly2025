import { GOT_DOG } from "../ActionType"

const DogReducer =(state={message:null,status:null},action)=>{
    if(action){
        if(action.type===GOT_DOG){
            console.log(action.data)
            return {...state,message:action.data.message}
        }

    }
    return state

}
export default DogReducer