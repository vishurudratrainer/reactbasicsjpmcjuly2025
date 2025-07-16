import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter);
  const inc = () => dispatch({ type: "INC" });
  const dec = () => dispatch({ type: "DEC" });

  return (
    <div>
      <button onClick={inc}>INC</button>
       <button onClick={dec}>DEC</button>
      <h1>Counter: {data}</h1>
    </div>
  );
};

export default Counter;
