import './App.css';
import { useState } from 'react'

import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {

  //Auth
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
