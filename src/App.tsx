
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Single from './pages/single'
import Navber from './components/navbar'
import Wishlist from './pages/wishlist' 
import Login from './pages/login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Auth from './pages/auth'
import Admin from './pages/admin'
function App() {

  return (
    <>
    <ToastContainer/>
    <Navber />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/single/:id" element={<Single />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Auth />}>
        <Route path="/admin" element={<Admin />} />
      </Route>  
    </Routes>
    
    </>
  )
}

export default App
