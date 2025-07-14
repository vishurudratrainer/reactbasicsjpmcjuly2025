import "./App.css";
import Nav from "./components/Nav";

import { useState } from "react";
import UserNameContext from "./context/UserNameContext";
import ThemeContext from "./context/ThemeContext";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const setBgColor=e=>setBackgroundColor(e.target.value)
  return (
    <div className="App">
      <UserNameContext.Provider value={{ username, setUserName }}>
       <ThemeContext.Provider value={{backgroundColor}}>
        
        <select onChange={setBgColor}>
          <option>""</option>
          <option value={"red"}>RED</option>
          <option value={"green"}>GREEN</option>
          <option value={"yellow"}>YELLOW</option>
        </select>
        <Nav
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        
       </ThemeContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
