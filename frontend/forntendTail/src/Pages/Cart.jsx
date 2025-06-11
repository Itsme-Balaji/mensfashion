import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import Shop from './Shop';


const Cart = () => {
    const token = localStorage.getItem("token");
  return (
    <div>
      {token?
       <CartItems /> :<Shop />}
    </div>
  )
}

export default Cart