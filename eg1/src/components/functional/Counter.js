//useState --hook ---16.8.0
//
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  //     data, function set data----initial value
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter functional example</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <br />
      <h1>Counter :{count}</h1>
    </div>
  );
}
