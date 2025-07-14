import './App.css';
import Nav from './components/Nav';

import { useState } from 'react';
import UserNameContext from './context/UserNameContext';
function App() {
  const [authenticated,setAuthenticated]=useState(false)
  const [username,setUserName] =useState("")
  return (
    <div className="App">
      <UserNameContext.Provider value={{username,setUserName}}>
      <Nav authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
