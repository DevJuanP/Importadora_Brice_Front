import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const InicioSesion = () => {
    return (
        <Fragment>
            {/* inicio de sesión */}
            <div className="div">
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
            </div>
        </Fragment>
    )
}

export default InicioSesion