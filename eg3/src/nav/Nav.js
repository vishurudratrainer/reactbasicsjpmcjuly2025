import { Routes, Route, Link } from "react-router-dom";
import Counter from "../components/Counter";
import Todos from "../components/Todos";
import PostForm from "../components/PostForm";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Counter</Link>
      <br />
      <Link to={"/todos"}>Todos</Link>
      <br />
      <Link to={"/post"}>Post</Link>
      <br />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/post" element={<PostForm />} />
      </Routes>
    </div>
  );
};
export default Nav;
