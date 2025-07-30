import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Citas from '../pages/Citas';
import CitaDetalle from '../pages/CitaDetalle';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes