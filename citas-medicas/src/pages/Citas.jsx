import { Link } from 'react-router-dom'
const Citas = () => {
  return (
    <div className='page-content'>
      <h1>Citas Médicas</h1>
      <p>
        Aquí puedes gestionar tus citas médicas. Utiliza el menú para navegar entre las diferentes secciones.
      </p>
      
      <Link to='/' className='btn-back'>Volver al Inicio</Link>
    </div>
  )
}

export default Citas;