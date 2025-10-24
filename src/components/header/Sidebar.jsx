import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
      <Fragment>
        {/* Logo */}
        <Link className="navbar-brand me-4" to="/">
          <img
            src="/src/img/logo-brice .jpg"
            alt="logo"
            style={{ width: '60px', height: '60px' }}
          />
        </Link>

        {/* Botón menú */}
        <button
          className="navbar-toggler border-0 d-flex align-items-center p-2"
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
      </Fragment>
    )
}

export default Sidebar