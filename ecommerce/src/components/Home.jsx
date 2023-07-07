import React from 'react'
import portada from '../img/portada.jpg'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <div className='portada'>
        <img className='portada-img' src={portada} alt="portada" />
        <ItemListContainer/>
    </div>
  )
}

export default Home