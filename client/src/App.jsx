import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Footer } from './components/Footer'
import Tenant from './Tenant/Tenant';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Tenant" element={<Tenant/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
