import { useState, useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/NavBar'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (username) => {
    const userData = { username }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar onLogin={login} onLogout={logout} />
      </BrowserRouter>
    </div>
  )
}

export default App
