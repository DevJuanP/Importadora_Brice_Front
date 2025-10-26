import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../context/SearchContext.jsx'
import './Header.css'

const Buscador = () => {
    const [localSearchTerm, setLocalSearchTerm] = useState('')
    const { searchProducts, clearSearch } = useSearch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (localSearchTerm.trim()) {
            searchProducts(localSearchTerm)
            navigate('/productos', { state: { searchTerm: localSearchTerm } })
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setLocalSearchTerm(value)
        
        // Búsqueda en tiempo real mientras escribe
        if (value.trim()) {
            searchProducts(value)
        } else {
            clearSearch()
        }
    }

    return (
        <Fragment>
            {/* Buscador */}
            <form
                className="d-flex"
                role="search"
                style={{ width: '550px', height: '42px', marginLeft: '40px', marginRight: '40px' }}
                onSubmit={handleSearch}
            >
                <input
                className="form-control rounded-start rounded-end-0 border-0"
                type="search"
                placeholder="Buscar Productos"
                aria-label="Search"
                value={localSearchTerm}
                onChange={handleInputChange}
                />
                <button className="btn bg-secondary rounded-start-0" type="submit">
                <i className="bi bi-search"></i>
                </button>
            </form>
        </Fragment>
    )
}

export default Buscador