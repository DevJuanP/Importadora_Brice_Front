import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import '../../pages/cart/CartPage.css'

function CartModal() {
    const navigate = useNavigate()
    const { 
        carrito, 
        isModalOpen, 
        cerrarModal, 
        aumentarCantidad, 
        disminuirCantidad, 
        eliminarDelCarrito,
        obtenerSubtotal,
        obtenerTotal,
        limpiarCarrito
    } = useCart()

    const subtotal = obtenerSubtotal()
    const total = obtenerTotal()

    const handlePagar = () => {
        // Limpiar el carrito y volver a la página de inicio
        limpiarCarrito()
        navigate('/')
    }

    const handleCerrarModal = () => {
        cerrarModal()
        navigate('/')
    }

    const handleVerCarritoCompleto = () => {
        navigate('/carrito')
    }

    if (!isModalOpen) {
        return null
    }

    return (
        <Fragment>
            <div className="cart-modal-overlay" onClick={handleCerrarModal}>
                <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="cart-modal-header">
                        <h2>Producto Agregado al Carrito</h2>
                        <button 
                            className="btn-close-modal"
                            onClick={handleCerrarModal}
                        >
                            ×
                        </button>
                    </div>

                    <div className="cart-modal-content">
                        {carrito.length === 0 ? (
                            <div className="cart-empty">
                                <p>Tu carrito está vacío</p>
                                <button 
                                    className="btn-continue-shopping"
                                    onClick={handleCerrarModal}
                                >
                                    Continuar Comprando
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="cart-items">
                                    {carrito.map((producto) => (
                                        <div key={producto.carritoId} className="cart-item">
                                            <div className="item-image">
                                                <img src={producto.img} alt={producto.nombre} />
                                            </div>
                                            <div className="item-details">
                                                <h3>{producto.nombre}</h3>
                                                <p className="item-price">S/ {producto.precio}</p>
                                                <p className="item-quantity">Cantidad: {producto.cantidad}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cart-summary">
                                    <div className="summary-row">
                                        <span>Total ({carrito.reduce((total, item) => total + item.cantidad, 0)} productos):</span>
                                        <span>S/ {total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="cart-actions">
                                    <button 
                                        className="btn-continue-shopping"
                                        onClick={handleCerrarModal}
                                    >
                                        Continuar Comprando
                                    </button>
                                    <button 
                                        className="btn-ver-carrito"
                                        onClick={handleVerCarritoCompleto}
                                    >
                                        Ver Carrito Completo
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartModal