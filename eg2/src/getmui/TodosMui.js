import { useState } from "react";
import TodosTable from "../table/TodosTable";
import Button from "@mui/material/Button";
import CommonGrid from "../table/CommonGrid";

const TodosMui = () => {
  const [todos, setTodos] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "userId", headerName: "USER ID", width: 300 },
    { field: "title", headerName: "TITLE", width: 200 },
    { field: "completed", headerName: "COMPLETED", width: 300 },
  ];
  const getData = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  return (
    <div>
      <Button variant="contained" onClick={getData}>
        GET TODOS
      </Button>
      <CommonGrid rows={todos} columns={columns} />
    </div>
  );
};
export default TodosMui;
