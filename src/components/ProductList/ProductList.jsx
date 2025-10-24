import React, { Fragment, useEffect, useState } from 'react'
import './ProductList.css'

const ProductList = () => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fecthProductos = async () => {
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
        fecthProductos()
    }, [])

    return (
        <Fragment>
        <section className="main-content">
            <aside className="filters">
            <h2>
                <i class="bi bi-funnel-fill"></i> Filtros
            </h2>
            <div className="filter-category">
                <h3>Categorias</h3>
                <label>
                <input type="checkbox" />
                <span>Hogar y Cocina</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Viaje y Camping</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Limpieza y Cuidado del Hogar</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Electrónica y Tecnología</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Deportes y Fitness</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Oficina y Escolar</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Jardinería</span>
                </label>
                <label>
                <input type="checkbox" />
                <span>Cuidado Personal</span>
                </label>
            </div>
            </aside>
            <main className="collections">
            <div className="options">
                <h2>TODOS LAS PRODUCTOS</h2>
                <div className="sort-options">
                <label>
                    <span className="me-3">Ordenar por:</span>
                    <select className="sort-select">
                    <option>Relevante</option>
                    <option>Precio: Menor a Mayor</option>
                    <option>Precio: Mayor a Menor</option>
                    </select>
                </label>
                </div>
            </div>
            <hr className=' linea mt-1'/>
            <div className="products">
                {error ? (
                <p className="error-message">{error}</p>
                ) : (
                productos.map((p) => (
                    <div className="product-card" key={p.id}>
                    <img src={p.img} alt="img-producto" />
                    <h3>{p.nombre}</h3>
                    <p>S/ {p.precio}</p>
                    </div>
                ))
                )}
            </div>
            </main>
        </section>
        </Fragment>
    )
}

export default ProductList
