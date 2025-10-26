import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import './Header.css'
const Carrito = () => {
    const { obtenerTotalItems } = useCart()
    const totalItems = obtenerTotalItems()

    return (
        <Fragment>
            {/* carrito */}
            <Link 
                to="/carrito" 
                className="btn-cart btn p-2"
            >
                <i className="bi bi-cart3 fs-1"></i>
                <span className='counter'>{totalItems}</span>
            </Link>
        </Fragment>
    )
}

export default Carrito