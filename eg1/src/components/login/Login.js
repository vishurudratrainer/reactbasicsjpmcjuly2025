import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const capture = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === loginData.password) {
      setAuthenticated(true);
      navigate("/calculator");
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Enter username <input name="username" onChange={capture} />
        </label>
        <br />
        <label>
          Enter password{" "}
          <input name="password" type="password" onChange={capture} />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
