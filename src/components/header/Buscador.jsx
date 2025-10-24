import React, { Fragment } from 'react'
import './Header.css'

const Buscador = () => {
    return (
        <Fragment>
            {/* Buscador */}
            <form
                className="d-flex"
                role="search"
                style={{ width: '550px', height: '42px', marginLeft: '40px', marginRight: '40px' }}
            >
                <input
                className="form-control rounded-start rounded-end-0 border-0"
                type="search"
                placeholder="Buscar Productos"
                aria-label="Search"
                />
                <button className="btn bg-secondary rounded-start-0" type="submit">
                <i className="bi bi-search"></i>
                </button>
            </form>
        </Fragment>
    )
}

export default Buscador