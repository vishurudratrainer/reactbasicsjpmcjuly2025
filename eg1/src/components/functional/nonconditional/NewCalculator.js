import { createRef, useState } from "react";
export default function NewCalculator() {
  const idRef1 = createRef();
  const idRef2 = createRef();
  const [op, setOp] = useState(0);
  const add = () =>
    setOp(parseInt(idRef1.current.value) + parseInt(idRef2.current.value));
  return (
    <div>
      <label>
        Enter inp1 <input ref={idRef1} />
      </label>
      <br />
      <label>
        Enter inp2 <input ref={idRef2} />
      </label>
      <br />
      <button onClick={add}>+</button>
      <h1>Result :{op}</h1>
    </div>
  );
}
