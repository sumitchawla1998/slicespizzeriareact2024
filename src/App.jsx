import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './user/pages/Register'
import Home from './user/pages/Home'
import Menu from './user/pages/Menu'
import MenuItem from './user/pages/MenuItem'
// import Login from './user/pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './user/pages/Login'
import Cart from './user/pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import Checkout from './user/pages/Checkout'
import MyOrders from './user/pages/MyOrders'
import Orders from './admin/pages/Orders'
import AdminLogin from './admin/pages/AdminLogin'
import Contact from './user/pages/Contact'
import About from './user/pages/About'
import { useUserStore } from './store/user'
import { useAdminStore } from './store/admin'

function App() {
  
  let isloggedin = useUserStore((state) => state.isloggedin)
  let isadminloggedin = useAdminStore((state) => state.isadminloggedin)

  return (
    <>
      <ToastContainer />
      {/* <Home /> */}
      {/* <Login/> */}




      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/login' element={<Login  />}/>
        <Route path='/register' element={<Register  />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/menu/:id' element={<MenuItem />}/>
        <Route path='/cart' element={ <Cart /> }/> 
        <Route path='/checkout' element={ isloggedin? <Checkout /> : <Navigate to="/login" />}/> 
        <Route path='/myorders' element={ isloggedin ? <MyOrders /> : <Navigate to="/login" />}/>
        
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact />}/> 
         

        <Route path='/adminlogin' element={<AdminLogin />}/>
        <Route path='/adminorders' element={isadminloggedin ? <Orders /> : <Navigate to="/adminlogin" />}/>
      </Routes>


    </>
  )
}

export default App
