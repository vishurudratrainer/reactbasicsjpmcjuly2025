import { Routes, Route, Link } from "react-router-dom";
import Todos from "../components/Todos";
import Dog from "../components/Dog";
import PostForm from "../components/PostForm";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/dog"}>Dog</Link>
      <br />
      <Link to={"/post"}>PostForm</Link>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/post" element={<PostForm/>}/>
      </Routes>
    </div>
  );
};
export default Nav;
