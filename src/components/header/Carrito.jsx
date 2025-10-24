import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Carrito = () => {
    return (
        <Fragment>
            {/* carrito */}
            <Link to="/carrito" className="btn-cart btn p-2">
                <i className="bi bi-cart3 fs-1"></i>
                <span className='counter'>0</span>
            </Link>
        </Fragment>
    )
}

export default Carrito