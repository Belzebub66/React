import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'

function App () {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
