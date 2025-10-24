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
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-house-fill"></i> Hogar y Cocina
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-backpack-fill"></i> Viaje y Camping
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-bucket-fill"></i> Limpieza y Cuidado del Hogar
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-phone"></i> Electrónica y Tecnología
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-dribbble"></i> Deportes y Fitness
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-briefcase-fill"></i> Oficina y Escolar
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-flower1"></i> Jardinería
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                    <i className="bi bi-bag-heart-fill"></i> Cuidado Personal
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
                Te mostraremos los productos disponibles en tu zona, junto con el
                tiempo y costo de entrega.
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
