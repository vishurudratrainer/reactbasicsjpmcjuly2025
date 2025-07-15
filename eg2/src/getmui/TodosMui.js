import { useState } from "react";
import Button from "@mui/material/Button";
import CommonGrid from "../table/CommonGrid";
import CircularProgress from "@mui/material/CircularProgress";

const TodosMui = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "userId", headerName: "USER ID", width: 300 },
    { field: "title", headerName: "TITLE", width: 200 },
    { field: "completed", headerName: "COMPLETED", width: 300 },
  ];
  const getData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setTodos(res);
        });
    }, 5000);
  };
  return (
    <div>
      <Button variant="contained" onClick={getData}>
        GET TODOS
      </Button>
      <br/>
      {loading && <CircularProgress color="success" />}
      <CommonGrid rows={todos} columns={columns} />
    </div>
  );
};
export default TodosMui;
