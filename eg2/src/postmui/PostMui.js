import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import TextField from "@mui/material/TextField";
const PostMui = () => {
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
          Enter userId <TextField name="userId" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter title <TextField name="title" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter body <TextField name="body" onChange={captureChange} />
        </label>
        <br />
        <Button type="submit" variant="contained">Add Post</Button>
      </form>

      <Alert severity="success">
        <h1>{JSON.stringify(res)}</h1>{" "}
      </Alert>
    </div>
  );
};

export default PostMui;
