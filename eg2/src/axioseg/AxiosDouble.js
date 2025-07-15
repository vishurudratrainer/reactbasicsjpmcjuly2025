import { useEffect, useState } from "react";
import axios from "axios";
import CommonGrid from "../table/CommonGrid";
const AxiosDouble=()=>{
const [posts,setPosts]=useState([])
const [comments,setComments]=useState([])
const onRowClick =e=>{
    console.log(e)
    axios.get("https://jsonplaceholder.typicode.com/comments?postId="+e.id)
    .then(res=>setComments(res.data))
}
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setPosts(res.data))
},[])

return(<div>
    <CommonGrid rows={posts} rowClick={onRowClick} columns={[
      { field: "id", headerName: "ID", width: 200 },
      { field: "userId", headerName: "USER ID", width: 300 },
      { field: "title", headerName: "TITLE", width: 200 },
      { field: "body", headerName: "BODY", width: 300 },
    ]}/>
    <CommonGrid rows={comments} columns={[ { field: "id", headerName: "ID", width: 200 },
      { field: "postId", headerName: "POST ID", width: 300 },
      { field: "name", headerName: "NAME", width: 200 },
      { field: "email", headerName: "EMAIL", width: 300 },
      { field: "body", headerName: "BODY", width: 300 },]} />
</div>)

}
export default AxiosDouble