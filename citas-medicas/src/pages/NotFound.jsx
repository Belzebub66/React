import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-content'>
      <h1>404 - Página No Encontrada</h1>
      <p>La página que buscas no existe. ¡Que triste!</p>
      <p>Intenta navegar a otra sección o vuelve al inicio.</p>
      <Link to='/' className='btn-back'>Volver al Inicio</Link>
    </div>
  )
}
export default NotFound