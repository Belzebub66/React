import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='page-content'>
      <h1>React Router</h1>
      <p>
        Esta es una aplicación de demostración que simula la navegación entre diferentes páginas utilizando <code>react-router-dom</code>.
      </p>
      <p>
        Navega a la sección de citas para comenzar.
      </p>
      <Link to='/citas' className='btn-back'>Ver Citas</Link>
    </div>
  )
}
export default Home