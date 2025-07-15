import { Routes, Route, Link } from "react-router-dom";
import Todos from "./get/Todos";
import TodosById from "./get/TodosById";
import PostForm from "./post/PostForm";
import Posts from "./nested/Posts";
import PostDropDown from "./effect/PostDropDown";

const Nav = () => (
  <div>
    <Link to={"/"}>TODOS</Link>
    <br />
    <Link to={"/todosbyid"}>TODOS BY ID</Link>
    <br />
    <Link to={"/post"}>POST FORM</Link>
    <br />
    <Link to={"/posts"}>POSTS</Link>
        <br />
    <Link to={"/postdrop"}>POST DROP DOWN</Link>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todosbyid" element={<TodosById />} />
      <Route path="/post" element={<PostForm />} />
      <Route path="/posts" element={<Posts />} />
        <Route path="/postdrop" element={<PostDropDown />} />

    </Routes>
  </div>
);
export default Nav;
