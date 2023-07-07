import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import cart from '../img/cart.svg'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="cart-widget">
        <Link  to="/carrito">
            <img  src={cart} alt="cart-widget" />
            <span >{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget