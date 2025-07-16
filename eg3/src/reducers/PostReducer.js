

const PostReducer  =(state={formData:{title:"",body:"",userId:""},res:{}},action)=>{
    if(action){
        if(action.type ==="CAPTURE_FORM"){
            let actionData =action.data
            let newFormData =Object.assign({},state.formData,actionData)
            return {...state,formData:newFormData}
        }
          if(action.type ==="POST_SAVED"){
            return {...state,res:action.data}
        }


    }
    return state

}
export default PostReducer