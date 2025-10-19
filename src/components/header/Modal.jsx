import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Modal = () => {
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
        </Fragment>
    )
}

export default Modal