import React, { Fragment } from 'react'
import './Header.css'
import Ubicacion from './Ubicacion'
import Buscador from './Buscador'
import InicioSesion from './InicioSesion'
import Modal from './Modal'
import Navbar from './Navbar'
import Carrito from './Carrito'

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-black p-0">
        {/* Contenedor principal */}
        <div className="container  mx-auto d-flex align-items-center justify-content-center p-0">
          <div className="d-flex align-items-center gap-2">
            <Navbar />
            <Ubicacion />
            <Buscador />
            <InicioSesion />
            <Carrito />
          </div>
          <Modal />
        </div>
      </nav>
    </Fragment>
  )
}

export default Header
