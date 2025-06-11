import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Shirt from './Pages/Shirt'
import SelectProduct from './Pages/SelectProduct'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Watch from './Pages/Watch';
import Pant from './Pages/Pant';

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
     <Navbar />

     <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/shirt' element={<Shirt />} />
      <Route path='/selectProduct' element={<SelectProduct />} >
        <Route path=':productId' element={<SelectProduct />} />     
      </Route>
      <Route path='/watch' element={<Watch />} />
      <Route path='/pant' element={<Pant />} />


      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />

      

     </Routes>
    </div>
  )
}

export default App