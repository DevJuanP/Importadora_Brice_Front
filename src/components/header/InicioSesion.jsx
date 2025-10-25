import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const InicioSesion = () => {
    return (
        <Fragment>
            {/* inicio de sesión */}
            <div className="div btn-inicio">
            <Link
                type="button"
                className="btn-inicio btn text-start d-flex justify-content-between ms-1"
                href="#"
                role="button"
                to="/login"
            >
                <span>
                ¡Hola! <br />
                <span className="fw-bold" style={{ fontSize: '16px' }}>
                    Inicia sesión
                </span>
                </span>
                <i className="bi bi-chevron-down m-3" style={{ fontSize: '13px' }}></i>
            </Link>
            </div>
        </Fragment>
    )
}

export default InicioSesion
