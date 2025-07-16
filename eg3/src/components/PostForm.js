import { useSelector, useDispatch } from "react-redux";
import {ADD_POST,CAPTURE_FORM} from "./ActionType"
const PostForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post);
 const sendFormData =e =>{
    let name = e.target.name
    let value =e.target.value
    dispatch({type:CAPTURE_FORM,data:{[name]:value}})
 }

 const addPost =(e)=>{
    e.preventDefault()
    dispatch({type:ADD_POST,formData:data.formData})
 }
  return (
    <div>
      <form onSubmit={addPost}>
        <label>
          Enter title
          <input name="title" onChange={sendFormData}/>
        </label>
        <br />
        <label>
          Enter body
          <input name="body" onChange={sendFormData}/>
        </label>
        <br />
        <label>
          Enter userid
          <input name="userId" onChange={sendFormData}/>
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
      {data.loading && <h1>Loading in progress</h1>}
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};
export default PostForm;
