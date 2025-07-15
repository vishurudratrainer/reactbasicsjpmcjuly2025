import { Routes, Route, Link } from "react-router-dom";
import Todos from "./Todos";
import TodosById from "./TodosById";

const Nav = () => (
  <div>
    <Link to={"/"}>TODOS</Link>
    <br />
    <Link to={"/todosbyid"}>TODOS BY ID</Link>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todosbyid" element={<TodosById />} />
    </Routes>
  </div>
);
export default Nav;
