import './App.css';
import Nav from './components/Nav';

import { useState } from 'react';

function App() {
  const [authenticated,setAuthenticated]=useState(false)
  return (
    <div className="App">
      <Nav authenticated={authenticated} setAuthenticated={setAuthenticated} />
    </div>
  );
}

export default App;
