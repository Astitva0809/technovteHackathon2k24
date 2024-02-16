import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Footer } from './components/Footer'
import Tenant from './Tenant/Tenant';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Getstarted from './pages/Getstarted';
import Ownerpage from './Owner/Ownerpage';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Tenant" element={<Tenant/>} />
      <Route path="/Ownerpage" element={<Ownerpage/>} />
      <Route path="/Getstarted" element={<Getstarted/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
