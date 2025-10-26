import React, { Fragment, useEffect, useState } from 'react'
import '../carrusel/CarruselTarjetas.css'

const CarruselTarjetas = () => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProductos = async () => {
        try {
            const response = await fetch('http://localhost:4000/productos/')
            if (!response.ok) {
            throw new Error('Error al cargar productos')
            }
            const data = await response.json()

            // Obtener 8 productos aleatorios
            const productosAleatorios = data
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)

            setProductos(productosAleatorios)
        } catch (err) {
            setError(err.message)
        }
        }
        fetchProductos()
    }, [])

    // Dividir productos en grupos de 4
    const agruparProductos = (productos, tamano) => {
        const grupos = []
        for (let i = 0; i < productos.length; i += tamano) {
        grupos.push(productos.slice(i, i + tamano))
        }
        return grupos
    }

    const gruposDeProductos = agruparProductos(productos, 4)

    return (
        <Fragment>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
            <hr
            className="d-block mx-auto"
            style={{ width: '72rem', borderTop: '2px solid #333' }}
            />
            <h6 className="mb-3 fs-4 mt-4">PRODUCTOS SOLO PARA TI</h6>
        </div>

        {error ? (
            <p className="text-center text-danger">{error}</p>
        ) : (
            <div
            id="carouselExample"
            className="carousel slide"
            style={{ maxWidth: '1450px', margin: '0 auto' }}
            >
            <div className="carousel-inner">
                {gruposDeProductos.map((grupo, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                    <div className="d-flex justify-content-center gap-3 mb-5">
                    {grupo.map((producto) => (
                        <div
                        className="card"
                        style={{ width: '18rem' }}
                        key={producto.id}
                        >
                        <img
                            src={producto.img}
                            className="card-img-top"
                            alt={producto.nombre}
                            style={{ height: '200px', objectFit: 'contain' }}
                        />
                        <div className="card-body">
                            <h6 className="card-title">{producto.nombre}</h6>
                            <p className="card-text">S/ {producto.precio}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        )}
        </Fragment>
    )
}

export default CarruselTarjetas
