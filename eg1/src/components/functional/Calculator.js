import { useState } from "react";

export default function Calculator() {
  const [ip, setIp] = useState({ip1:0,ip2:0});
  const [op, setOp] = useState(0);

  const captureInput =e=>{
    let name = e.target.name
    let value =e.target.value
    setIp({...ip,[name]:value})
    //[] here indicates eveluate

  }
const add =()=>setOp(parseInt(ip.ip1)+parseInt(ip.ip2))
const sub =()=>setOp(parseInt(ip.ip1)-parseInt(ip.ip2))
const mul =()=>setOp(parseInt(ip.ip1)*parseInt(ip.ip2))
const div =()=>setOp(parseInt(ip.ip1)/parseInt(ip.ip2))

  return (
    <div>
      <label>
        Enter input <input name="ip1" onChange={captureInput}/>
      </label>
      <br />
      <label>
        Enter input <input name="ip2" onChange={captureInput}/>
      </label>
      <br />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      <h1>{JSON.stringify(ip)}</h1>
      <h1>Result {op}</h1>
    </div>
  );
}
