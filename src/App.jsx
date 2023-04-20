import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Accesorios from './Pages/Accesorios/Accesorios';
import Mates from './Pages/Mates/Mates';
import Mayorista from './Pages/Mayorista/Mayorista';
import Productos  from './Pages/Productos/Productos';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import ResponsiveAppBar from './Components/Appbar/ResponsiveAppBar';



function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Accesorios' element={<Accesorios/>}/>
        <Route path='/Mates' element={<Mates/>}/>
        <Route path='/Mayorista' element={<Mayorista/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
