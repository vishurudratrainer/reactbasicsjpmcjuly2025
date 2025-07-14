import { Route, Routes, Link } from "react-router-dom";
import Counter from "./functional/Counter";
import Calculator from "./functional/Calculator";
import StudentForm from "./functional/student/StudentForm";
import NavEg from "./functional/nav/NavEg";
export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/calculator">Calculator</Link>
      <br />
      <Link to="/studentform">Student Form</Link>
      <br />
      <Link to="/naveg">Navigation Example</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/naveg" element={<NavEg />} />
      </Routes>
    </div>
  );
}
