import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useState, useEffect } from 'react'

const Modal = () => {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const provitional = () =>{//cambiar esta función segun el login y rol del usuario
        setAdmin(true)
    }

    provitional()
    return () => {}
  })

  return (
    <Fragment>
      {/* Modal Menú lateral */}
      <div
        className="offcanvas offcanvas-start custom-offcanvas "
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            CATEGORIAS
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
              <Link className="nav-link" to="/productos?categoria=hogar-cocina">
                <i className="bi bi-house-fill"></i> Hogar y Cocina
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/productos?categoria=viaje-camping"
              >
                <i className="bi bi-backpack-fill"></i> Viaje y Camping
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos?categoria=limpieza">
                <i className="bi bi-bucket-fill"></i> Limpieza y Cuidado del
                Hogar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos?categoria=electronica">
                <i className="bi bi-phone"></i> Electrónica y Tecnología
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos?categoria=deportes">
                <i className="bi bi-dribbble"></i> Deportes y Fitness
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos?categoria=oficina">
                <i className="bi bi-briefcase-fill"></i> Oficina y Escolar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos?categoria=jardineria">
                <i className="bi bi-flower1"></i> Jardinería
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/productos?categoria=cuidado-personal"
              >
                <i className="bi bi-bag-heart-fill"></i> Cuidado Personal
              </Link>
            </li>
          </ul>
        </div>

        {admin && (
          <div>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                ADMIN
              </h5>
            </div>
            <div className="offcanvas-body">
              <Link className="nav-link" to="/dashboard">
                <i class="bi bi-person-fill-lock"></i> Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Modal
