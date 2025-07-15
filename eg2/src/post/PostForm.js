import { useState } from "react";

const PostForm = () => {
  const [res, setRes] = useState({});
  const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
  const captureChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setRes(json));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter userId <input name="userId" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter title <input name="title" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={captureChange} />
        </label>
        <br />
        <button>Add Post</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
};

export default PostForm;
