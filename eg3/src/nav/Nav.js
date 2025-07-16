import { Routes, Route, Link } from "react-router-dom";
import Counter from "../components/Counter";
import Todos from "../components/Todos";
import PostForm from "../components/PostForm";
import Dog from "../components/Dog";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Counter</Link>
      <br />
      <Link to={"/todos"}>Todos</Link>
      <br />
      <Link to={"/post"}>Post</Link>
      <br />
      <br />
      <Link to={"/dog"}>Dog</Link>
      <br />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
};
export default Nav;
