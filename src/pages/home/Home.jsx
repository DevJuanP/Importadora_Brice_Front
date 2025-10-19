import React, { Fragment } from 'react'
import Banner from '../../components/banner/Banner'
import Oferta from '../../components/ofertas24hrs/Oferta'
import CarruselTarjetas from '../../components/carrusel/CarruselTarjetas'


const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Oferta />
      <CarruselTarjetas/>
    </Fragment>
  )
}

export default Home
