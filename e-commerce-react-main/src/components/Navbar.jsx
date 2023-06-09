import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to = '/'><h1>FoodShoop</h1></Link>
        <ul className="menu">
          <Link to = '/'>Home</Link>
          <Link to = '/productos'>Productos</Link>
          <Link to = '/contacto'>Contactos</Link>
            
            
        </ul>
    </nav>
  )
}

export default Navbar