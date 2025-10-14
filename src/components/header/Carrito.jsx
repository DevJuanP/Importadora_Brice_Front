import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Carrito = () => {
    return (
        <Fragment>
            {/* carrito */}
            <Link className="btn-cart btn p-2">
                <i class="bi bi-cart3 fs-1"></i>
            </Link>
        </Fragment>
    )
}

export default Carrito