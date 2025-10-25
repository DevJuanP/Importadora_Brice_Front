import React, { Fragment } from 'react'
import '../carrusel/CarruselTarjetas.css'
const CarruselTarjetas = () => {
    return (
        <Fragment>
        <div
            className="mx-auto"
            style={{ maxWidth: '72rem' }}
        >
            <hr
            className="d-block mx-auto"
            style={{ width: '72rem' }}
            />
            <h6 className="mb-3">PRODUCTOS SOLO PARA TI</h6>
        </div>
        <div
            id="carouselExample"
            className="carousel slide"
            style={{ maxWidth: '1450px', maxHeight: '200px', margin: '0 auto' }}
        >
            {/* slide 1 */}
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="d-flex justify-content-center mb-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 1</p>
                    </div>
                </div>
                {/* tarjeta 2 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 2</p>
                    </div>
                </div>
                {/* tarjeta 3 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 3</p>
                    </div>
                </div>
                {/* tarjeta 4 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 4</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="d-flex justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 5</p>
                    </div>
                </div>
                {/* tarjeta 6 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 6</p>
                    </div>
                </div>
                {/* tarjeta 7 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 7</p>
                    </div>
                </div>
                {/* tarjeta 8 */}
                <div className="card" style={{ width: '18rem' }}>
                    <img
                    src="/src/img/maxresdefault.jpg"
                    class="card-img-top"
                    alt="img"
                    />
                    <div className="card-body">
                    <p className="card-text">texto 8</p>
                    </div>
                </div>
                </div>
            </div>
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
        </Fragment>
    )
}

export default CarruselTarjetas
