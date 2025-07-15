import { useState } from "react";

import Button from "@mui/material/Button";
import axios from "axios";
import CommonGrid from "../table/CommonGrid";
const AxiosColumn = () => {
  const getData = () =>
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      let firstRow = res.data[0];
      let h = [];
      for (let property in firstRow) {
        h.push({
          field: property,
          headerName: property.toUpperCase(),
          width: 200,
        });
      }
      setData(res.data)
      setHeaders(h)
    });
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  return (
    <div>
      <Button variant="contained" onClick={getData}>
        GET TODOS
      </Button>
      <CommonGrid rows={data} columns={headers}/>
    </div>
  );
};

export default AxiosColumn;
