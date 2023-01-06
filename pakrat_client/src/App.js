import { useState, useEffect } from 'react'
import axiosCreate from './services/apiServices';
import { useNavigate } from 'react-router-dom';

import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
      checkToken()
    }
  }, [])

  return (
    <div className="bg-white h-screen font-lato tracking-wide text-dark">
      <DataContext.Provider value={{authenticated, toggleAuthenticated, user, setUser, handleLogOut}}>
        <NavBar />
        <Main />
        <Footer />
        <div className='h-10'></div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
