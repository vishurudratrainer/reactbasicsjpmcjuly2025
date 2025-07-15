import { useEffect, useState } from "react";
import CommonTable from "../table/CommonTable";

const PostDropDown = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const handlePost = (e) => {
    let postId = e.target.value;

    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
      .then((res) => res.json())
      .then((commentData) => {
        setPost(posts.filter((data) => data.id == postId));
        setComment(commentData);
      });
  };
  return (
    <div>
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