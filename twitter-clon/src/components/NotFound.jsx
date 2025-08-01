import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-content'>
      <h1>404 - Página No Encontrada</h1>
      <p>La página que buscas no existe. ¡Wubba Lubba Dub Dub!</p>
      <Link to='/' className='btn-back'>Volver al Inicio</Link>
    </div>
  )
}
export default NotFound
