import { useContext } from "react";
import UserNameContext from "../../../context/UserNameContext";
import ThemeContext from "../../../context/ThemeContext";
export default function StudentTable({ students, color }) {
  //instead of using props everywhere u can make use of {property]}
  const userNameContext = useContext(UserNameContext);
  const themeContext=useContext(ThemeContext)
  if (students) {
    if (students.length > 0) {
      return (
        <div>
          <h1>Welcome {userNameContext.username}</h1>
          <table style={{ backgroundColor: themeContext.backgroundColor }} border={1}>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        {" "}
        <h1>Welcome {userNameContext.username}</h1>
        No data
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <h1>Welcome {userNameContext.username}</h1>
        No data
      </div>
    );
  }
}
