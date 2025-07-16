import { Routes, Route, Link } from "react-router-dom";
import Todos from "../components/Todos";
import Dog from "../components/Dog";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/dog"}>Dog</Link>

      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
};
export default Nav;
