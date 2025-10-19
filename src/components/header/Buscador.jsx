import React, { Fragment } from 'react'
import './Header.css'

const Buscador = () => {
    return (
        <Fragment>
            {/* Buscador */}
            <form
                class="d-flex"
                role="search"
                style={{ width: '550px', height: '42px', marginLeft: '40px', marginRight: '40px' }}
            >
                <input
                class="form-control rounded-start rounded-end-0 border-0"
                type="search"
                placeholder="Buscar Productos"
                aria-label="Search"
                />
                <button class="btn bg-secondary rounded-start-0" type="submit">
                <i class="bi bi-search"></i>
                </button>
            </form>
        </Fragment>
    )
}

export default Buscador