import React, { Fragment } from 'react'
import Banner from '../../components/banner/Banner'
import Oferta from '../../components/ofertas24hrs/Oferta'
import CarruselTarjetas from '../../components/carrusel/CarruselTarjetas'
import './Home.css'

const Home = () => {
  return (
    <Fragment> 
      <div className="home-page">
        <div className="banner-section">
          <Banner />
        </div>
        
        <div className="container">
          <div className="ofertas-section">
            <Oferta />
          </div>
          
          <div className="productos-section">
            <CarruselTarjetas/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
