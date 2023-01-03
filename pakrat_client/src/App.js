import './App.css';
import { useState, useEffect } from 'react'
import axiosCreate from './services/apiServices';
import { useNavigate } from 'react-router-dom';

import Main from './components/Main';
import NavBar from './components/NavBar';
import { DataContext } from './DataContext';

function App() {

  let navigate = useNavigate()

  //Auth
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
    navigate('/')
  }

  const CheckSession = async () => {
    try {
      const res = await axiosCreate.get('/api/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // console.log(token)
      checkToken()
    }
    // console.log(user)
    // console.log('check')
  }, [])

  return (
    <div className="App">
      <DataContext.Provider value={{authenticated, toggleAuthenticated, user, setUser, handleLogOut}}>
        <NavBar />
        <Main />
      </DataContext.Provider>
    </div>
  );
}

export default App;
