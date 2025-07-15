import { useState } from "react";
import CommonGrid from "../table/CommonGrid";

import TextField from "@mui/material/TextField";

const TodosMuiId = () => {
  const [todos, setTodos] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "userId", headerName: "USER ID", width: 300 },
    { field: "title", headerName: "TITLE", width: 200 },
    { field: "completed", headerName: "COMPLETED", width: 300 },
  ];
  const captureChange = (e) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.value}`)
      .then((res) => res.json())
      .then((res) => setTodos([res]));
  return (
    <div>
      <label>
        Enter todo id{" "}
        <TextField
          id="outlined-basic"
          label="Enter todo id"
          onChange={captureChange}
        />
      </label>
      <br />
      <CommonGrid rows={todos} columns={columns} />{" "}
    </div>
  );
};

export default TodosMuiId;
