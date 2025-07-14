import { Route, Routes, Link } from "react-router-dom";
import Counter from "./functional/Counter";
import Calculator from "./functional/Calculator";
import StudentForm from "./functional/student/StudentForm";
import NavEg from "./functional/nav/NavEg";
import Login from "./login/Login";
export default function Nav() {
  return (
    <div>
      <Link to="/">Login</Link>
      <br />
      <Link to="/calculator">Calculator</Link>
      <br />
      <Link to="/studentform">Student Form</Link>
      <br />
      <Link to="/naveg">Navigation Example</Link>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/naveg" element={<NavEg />} />
      </Routes>
    </div>
  );
}
