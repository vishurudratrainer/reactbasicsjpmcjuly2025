import { useEffect, useState } from "react";
import CommonTable from "../table/CommonTable";

const PostDropDown = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
 const [loading,setLoading]=useState(false)
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const handlePost = (e) => {
    let postId = e.target.value;
    setLoading(true)
    setTimeout(()=>{ fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
      .then((res) => res.json())
      .then((commentData) => {
        setPost(posts.filter((data) => data.id == postId));
        setComment(commentData);
        setLoading(false)
      });},5000)
   
  };
  return (
    <div>
        {loading && <h1>Data is loading</h1>}
      <label>
        Select post
        <select onChange={handlePost}>
          <option>Select</option>
          {posts.map((p) => (
            <option value={p.id}>{p.title}</option>
          ))}
        </select>
      </label>
      <CommonTable data={post} columns={["id", "userId", "title", "body"]} />
      <CommonTable
        data={comment}
        columns={["id", "postId", "name", "email", "body"]}
      />
    </div>
  );
};
export default PostDropDown