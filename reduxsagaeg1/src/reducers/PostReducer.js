
import { ADD_POST, CAPTURE_FORM,POST_SAVED } from "../ActionType"
const PostReducer  =(state={formData:{title:"",body:"",userId:""},res:{},loading:false},action)=>{
    if(action){
        if(action.type ===CAPTURE_FORM){
            let actionData =action.data
            let newFormData =Object.assign({},state.formData,actionData)
            return {...state,formData:newFormData}
        }
          if(action.type ===POST_SAVED){
            return {...state,res:action.data,loading:false}
        }
        if(action.type ===ADD_POST){
            return {...state,loading:true}
        }


    }
    return state

}
export default PostReducer