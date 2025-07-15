import { useState } from "react";
import CommonTable from "../table/CommonTable";

const Posts = () => {
  const [post, setPost] = useState([]);
  const getPost = () =>
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setPost(res));
  return (
    <div>
      <button onClick={getPost}>FETCH POST</button>
      <CommonTable data={post} columns={["userId","id","title","body"]}/>
    </div>
  );
};

export default Posts