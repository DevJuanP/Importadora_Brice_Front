import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'bootstrap'

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-black p-0">
      {/* Contenedor principal */}
      <div className="container  mx-auto d-flex align-items-center justify-content-center p-0">
        {/* Sección izquierda: logo, menú, línea y ubicación */}
        <div className="d-flex align-items-center gap-2">
          {/* Logo */}
          <Link className="navbar-brand p-0 m-0" to="/">
            <img
              src="https://media.discordapp.net/attachments/1391243726055145497/1426046460209791108/logo-brice.jpg?ex=68ea7582&is=68e92402&hm=9553ab614a5379389692964c19c8db01889dab9e7092693d3848c3e460d4733d&=&format=webp"
              alt="logo"
              style={{ width: '60px', height: '60px' }}
            />
          </Link>

          {/* Botón menú */}
          <button
            className="navbar-toggler border-0 d-flex align-items-cep-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span
              className="menu ms-2"
              style={{ fontSize: '16px', marginTop: '5px' }}
            >
              Menú
            </span>
          </button>

          {/* Línea divisoria */}
          <div
            className="vr mt-3 mb-3 me-1 ms-1 bg-white"
            style={{ height: '45px', width: '1px' }}
          ></div>

          {/* Botón de ubicación */}
          <button
            type="button"
            className="btn border-0 d-flex align-items-center p-0 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-geo-alt me-2 fs-3 "></i>
            <div className="text-start lh-sm" style={{ fontSize: '16px' }}>
              <span>Ingresa tu</span>
              <br />
              ubicación
            </div>
          </button>

          {/* Buscador */}
          <form
            class="d-flex"
            role="search"
            style={{ width: '550px', height: '42px', marginLeft: '80px' }}
          >
            <input
              class="form-control rounded-start rounded-end-0 border-0"
              type="search"
              placeholder="Buscar Productos"
              aria-label="Search"
            />
            <button class="btn bg-secondary rounded-start-0" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>

          {/* inicio de sesión */}
          <Link
            class="btn-inicio btn text-start d-flex justify-content-between ms-5"
            href="#"
            role="button"
          >
            <span>
              ¡Hola! <br />
              <span className="fw-bold" style={{ fontSize: '16px' }}>
                Inicia sesión
              </span>
            </span>
            <i class="bi bi-chevron-down m-3" style={{ fontSize: '13px' }}></i>
          </Link>

          {/* carrito */}
          <Link className="btn-cart btn p-2">
            <i class="bi bi-cart3 fs-1"></i>
          </Link>
        </div>

        {/* Menú lateral (offcanvas) */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal ubicación */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Elige dónde recibir tus compras
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                Te mostraremos los productos disponibles en tu zona, junto con
                el tiempo y costo de entrega.
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn bg-dark text-white">
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
