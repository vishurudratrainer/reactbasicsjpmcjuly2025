import { Routes, Route, Link } from "react-router-dom";
import Counter from "../components/Counter";
import Todos from "../components/Todos";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Counter</Link>
      <br />
      <Link to={"/todos"}>Todos</Link>
      <br />

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
};
export default Nav;
