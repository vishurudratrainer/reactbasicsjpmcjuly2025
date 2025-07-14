import { Route, Routes, Link } from "react-router-dom";
import Calculator from "./functional/Calculator";
import StudentForm from "./functional/student/StudentForm";
import NavEg from "./functional/nav/NavEg";
import Login from "./login/Login";
export default function Nav({ setAuthenticated, authenticated }) {
  return (
    <div>
      {authenticated===false && <Link to="/">Login</Link>}
      <br />
      {authenticated && (
        <div>
          <Link to="/calculator">Calculator</Link>
          <br />
          <Link to="/studentform">Student Form</Link>
          <br />
          <Link to="/naveg">Navigation Example</Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated}/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/naveg" element={<NavEg />} />
      </Routes>
    </div>
  );
}
