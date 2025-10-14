import React, { Fragment } from 'react'
import './Header.css'

const Ubicacion = () => {
    return (
        <Fragment>
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
        </Fragment>
    )   
}

export default Ubicacion