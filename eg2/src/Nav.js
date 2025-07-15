import { Routes, Route, Link } from "react-router-dom";
import Todos from "./get/Todos";
import TodosById from "./get/TodosById";
import PostForm from "./post/PostForm";
import Posts from "./nested/Posts";
import PostDropDown from "./effect/PostDropDown";
import TodosMui from "./getmui/TodosMui";
import TodosMuiId from "./getmui/TodosMuiId";
import PostMui from "./postmui/PostMui";
import ResponsiveAppBar from "./appbar/ResponsiveAppBar";

const Nav = () => (
  <div>
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todosbyid" element={<TodosById />} />
      <Route path="/post" element={<PostForm />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/postdrop" element={<PostDropDown />} />
      <Route path="/todosmui" element={<TodosMui />} />
      <Route path="/todosidmui" element={<TodosMuiId />} />
      <Route path="/postmui" element={<PostMui />} />
    </Routes>
  </div>
);
export default Nav;
