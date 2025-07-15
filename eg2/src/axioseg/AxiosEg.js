import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import CommonGrid from "../table/CommonGrid";
const AxiosEg = () => {
  const headers = {
    "": [],
    todos: [
      { field: "id", headerName: "ID", width: 200 },
      { field: "userId", headerName: "USER ID", width: 300 },
      { field: "title", headerName: "TITLE", width: 200 },
      { field: "completed", headerName: "COMPLETED", width: 300 },
    ],
    posts: [
      { field: "id", headerName: "ID", width: 200 },
      { field: "userId", headerName: "USER ID", width: 300 },
      { field: "title", headerName: "TITLE", width: 200 },
      { field: "body", headerName: "BODY", width: 300 },
    ],
    comments: [
      { field: "id", headerName: "ID", width: 200 },
      { field: "postId", headerName: "POST ID", width: 300 },
      { field: "name", headerName: "NAME", width: 200 },
      { field: "email", headerName: "EMAIL", width: 300 },
      { field: "body", headerName: "BODY", width: 300 },
    ],
  };
  const handleChange = (event) => {
    console.log(event.target);
    let url = event.target.value;
    setSelect(url);

    axios.get("https://jsonplaceholder.typicode.com/" + url).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };
  const menuItems = ["todos", "comments", "posts"];
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select url</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Select url"
            onChange={handleChange}
          >
            {menuItems.map((data) => (
              <MenuItem value={data}>{data}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <CommonGrid rows={data} columns={headers[select]} />
    </div>
  );
};
export default AxiosEg;
