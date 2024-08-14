
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Single from './pages/single'
import Navber from './components/navbar'
import Wishlist from './pages/wishlist' 
function App() {

  return (
    <>
    <Navber />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/single/:id" element={<Single />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    
    </>
  )
}

export default App
