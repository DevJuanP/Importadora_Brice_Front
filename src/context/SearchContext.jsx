import React, { createContext, useState } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const searchProducts = async (term) => {
        if (!term.trim()) {
            setSearchResults([])
            return
        }

        setIsSearching(true)
        try {
            const response = await fetch('http://localhost:4000/productos/')
            if (!response.ok) {
                throw new Error('Error al buscar productos')
            }
            const allProducts = await response.json()
            
            // Filtrar productos por nombre o iniciales
            const filtered = allProducts.filter(producto => {
                const nombre = producto.nombre.toLowerCase()
                const termino = term.toLowerCase()
                
                // Buscar por coincidencia exacta, iniciales o palabras que empiecen con el término
                return nombre.includes(termino) || 
                       nombre.split(' ').some(palabra => palabra.startsWith(termino)) ||
                       nombre.split(' ').map(palabra => palabra.charAt(0)).join('').includes(termino)
            })
            
            setSearchResults(filtered)
        } catch (error) {
            console.error('Error en la búsqueda:', error)
            setSearchResults([])
        } finally {
            setIsSearching(false)
        }
    }

    const clearSearch = () => {
        setSearchTerm('')
        setSearchResults([])
    }

    const value = {
        searchTerm,
        setSearchTerm,
        searchResults,
        isSearching,
        searchProducts,
        clearSearch
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    const context = React.useContext(SearchContext)
    if (!context) {
        throw new Error('useSearch debe ser usado dentro de un SearchProvider')
    }
    return context
}

export default SearchContext
