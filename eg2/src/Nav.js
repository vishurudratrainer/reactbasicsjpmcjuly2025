import { Routes, Route, Link } from "react-router-dom";
import Todos from "./get/Todos";
import TodosById from "./get/TodosById";
import PostForm from "./post/PostForm";

const Nav = () => (
  <div>
    <Link to={"/"}>TODOS</Link>
    <br />
    <Link to={"/todosbyid"}>TODOS BY ID</Link>
    <br />
    <Link to={"/post"}>POST FORM</Link>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todosbyid" element={<TodosById />} />
      <Route path="/post" element={<PostForm />} />
    </Routes>
  </div>
);
export default Nav;
