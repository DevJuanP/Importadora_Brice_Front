import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './ProductList.css'

const ProductList = () => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)
    const [orden, setOrden] = useState('Relevante')
    const [filtros, setFiltros] = useState({ categorias: [] })
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate() // ✅ Cambio aquí: sin corchetes

    // filtro de categorias menu
    useEffect(() => {
        const categoriaURL = searchParams.get('categoria')
        if (categoriaURL) {
            // Convertir el valor de la URL al formato de tu categoría
            // Por ejemplo: "hogar-cocina" -> "Hogar y Cocina"
            const categoriasMap = {
            'hogar-cocina': 'Hogar y Cocina',
            'viaje-camping': 'Viaje y Camping',
            'limpieza': 'Limpieza y Cuidado del Hogar',
            'electronica': 'Electrónica y Tecnología',
            'deportes': 'Deportes y Fitness',
            'oficina': 'Oficina y Escolar',
            'jardineria': 'Jardinería',
            'cuidado-personal': 'Cuidado Personal',
            }

            const categoriaNombre = categoriasMap[categoriaURL]
            if (categoriaNombre) {
            setFiltros({ categorias: [categoriaNombre] })
            }
        }
    }, [searchParams])

    // conexion de productos
    useEffect(() => {
        const fetchProductos = async () => {
        try {
            const response = await fetch('http://localhost:4000/productos/')
            if (!response.ok) {
            throw new Error('Error al cargar productos')
            }
            const data = await response.json()
            setProductos(data)
        } catch (err) {
            setError(err.message)
        }
        }
        fetchProductos()
    }, [])

    const handleOrdenChange = (e) => {
        setOrden(e.target.value)
    }

    const toggleFiltros = (tipoFiltro, valor) => {
        setFiltros((prev) => ({
        ...prev,
        [tipoFiltro]: prev[tipoFiltro].includes(valor)
            ? prev[tipoFiltro].filter((item) => item !== valor)
            : [...prev[tipoFiltro], valor],
        }))
    }

    const productosFiltrados = productos.filter((producto) => {
        const matchCategoria =
        filtros.categorias.length === 0 ||
        filtros.categorias.includes(producto.categoria)
        return matchCategoria
    })

    const productosOrdenados = productosFiltrados.sort((a, b) => {
        if (orden === 'Precio: Menor a Mayor') {
        return a.precio - b.precio
        } else if (orden === 'Precio: Mayor a Menor') {
        return b.precio - a.precio
        }
        return 0
    })
    
    const handleImageClick = (id) => {
        navigate(`/productos/${id}`)
    }

    return (
        <Fragment>
            <section className="main-content">
            <aside className="filters">
                <h2>
                <i className="bi bi-funnel-fill"></i> FILTROS
                </h2>
                <div className="filter-category">
                <h3>CATEGORIAS</h3>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Hogar y Cocina')}
                    onChange={() => toggleFiltros('categorias', 'Hogar y Cocina')}
                    />
                    <span>Hogar y Cocina</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Viaje y Camping')}
                    onChange={() =>
                        toggleFiltros('categorias', 'Viaje y Camping')
                    }
                    />
                    <span>Viaje y Camping</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes(
                        'Limpieza y Cuidado del Hogar'
                    )}
                    onChange={() =>
                        toggleFiltros('categorias', 'Limpieza y Cuidado del Hogar')
                    }
                    />
                    <span>Limpieza y Cuidado del Hogar</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes(
                        'Electrónica y Tecnología'
                    )}
                    onChange={() =>
                        toggleFiltros('categorias', 'Electrónica y Tecnología')
                    }
                    />
                    <span>Electrónica y Tecnología</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Deportes y Fitness')}
                    onChange={() =>
                        toggleFiltros('categorias', 'Deportes y Fitness')
                    }
                    />
                    <span>Deportes y Fitness</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Oficina y Escolar')}
                    onChange={() =>
                        toggleFiltros('categorias', 'Oficina y Escolar')
                    }
                    />
                    <span>Oficina y Escolar</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Jardinería')}
                    onChange={() => toggleFiltros('categorias', 'Jardinería')}
                    />
                    <span>Jardinería</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={filtros.categorias.includes('Cuidado Personal')}
                    onChange={() =>
                        toggleFiltros('categorias', 'Cuidado Personal')
                    }
                    />
                    <span>Cuidado Personal</span>
                </label>
                </div>
            </aside>
            <main className="collections">
                <div className="options">
                <h2>TODOS LOS PRODUCTOS</h2>
                <div className="sort-options">
                    <label>
                    <span className="me-3">Ordenar por:</span>
                    <select
                        className="sort-select"
                        onChange={handleOrdenChange}
                        value={orden}
                    >
                        <option>Relevante</option>
                        <option>Precio: Menor a Mayor</option>
                        <option>Precio: Mayor a Menor</option>
                    </select>
                    </label>
                </div>
                </div>
                <hr className="linea mt-1" />
                <div className="products">
                {error ? (
                    <p className="error-message">{error}</p>
                ) : productosFiltrados.length > 0 ? (
                    productosOrdenados.map((p) => (
                    <div className="product-card" key={p.id}>
                        <img
                        src={p.img}
                        alt="img-producto"
                        onClick={() => handleImageClick(p.id)}
                        />
                        <h3>{p.nombre}</h3>
                        <p>S/ {p.precio}</p>
                    </div>
                    ))
                ) : (
                    <p className="no-results">
                    No hay productos que coinciden con los filtros seleccionados
                    </p>
                )}
                </div>
            </main>
            </section>
        </Fragment>
    )
}

export default ProductList