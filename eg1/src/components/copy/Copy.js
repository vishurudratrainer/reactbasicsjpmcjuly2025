import { useState } from "react";

export default function Copy() {
  const [tableData1, setTableData1] = useState([
    { rollNo: 1, name: "aBCD" },
    { rollNo: 2, name: "Xyx" },
  ]);

  const [tableData2, setTableData2] = useState([]);
  const move =e =>{
    let rollNo = e.target.name
    let element =null;
    for(let i=0; i < tableData1.length;i++){
        if(tableData1[i].rollNo==rollNo){
            element =tableData1[i]
        }
    }
    setTableData1(tableData1.filter(data=>data.rollNo!=rollNo))
    setTableData2(tableData2.concat(element))
  }

  return (
    <div>
      <table border={1}>
        <thead>
          <th>RollNo</th>
          <th>Name</th>
          <th>Move</th>
        </thead>
        <tbody>
          {tableData1.map((row) => (
            <tr>
              <td>{row.rollNo}</td>
              <td>{row.name}</td>
              <td><button name={row.rollNo} onClick={move}>Move</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <table border={1}>
        <thead>
          <th>RollNo</th>
          <th>Name</th>
        </thead>
        <tbody>
          {tableData2.map((row) => (
            <tr>
              <td>{row.rollNo}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
