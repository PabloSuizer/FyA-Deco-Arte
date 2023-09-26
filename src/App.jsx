import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nosotros from './Pages/Nosotros/Nosotros';
import Mates from './Pages/Mates/Mates';
import Mayorista from './Pages/Mayorista/Mayorista';
import CotizaProducto  from './Pages/Cotiza Producto/CotizaProducto';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import ResponsiveAppBar from './Components/Appbar/ResponsiveAppBar';



function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Mates' element={<Mates/>}/>
        <Route path='/Mayorista' element={<Mayorista/>}/>
        <Route path='/Cotiza tu Productos' element={<CotizaProducto/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
