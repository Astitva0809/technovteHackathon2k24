import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Footer } from './components/Footer'

import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
