import { NavLink } from 'react-router-dom'

const Navbar = ({ onLogin, onLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
      <div className='auth-buttons'>
        <button onClick={onLogout} className='btn btn-link'>Logout</button>
        <button onClick={onLogin} className='btn btn-link'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
