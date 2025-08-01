import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

const AppRoutes = ({ user, login, logout }) => {
  return (
    <Routes>
      <Route path='/login' element={<Login onLogin={login} />} />
      <Route path='/' element={<Home user={user} logout={logout} />} />
      <Route
        path='/profile'
        element={user ? <Profile user={user} /> : <Navigate to='/login' />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
