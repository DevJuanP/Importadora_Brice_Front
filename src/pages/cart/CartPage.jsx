import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import './CartPage.css'

function CartPage() {
    const navigate = useNavigate()
    const { 
        carrito, 
        aumentarCantidad, 
        disminuirCantidad, 
        eliminarDelCarrito,
        obtenerSubtotal,
        obtenerTotal,
        limpiarCarrito
    } = useCart()

    console.log('=== CART PAGE ===');
    console.log('Carrito en CartPage:', carrito);
    console.log('Cantidad de productos en carrito:', carrito.length);

    const subtotal = obtenerSubtotal()
    const total = obtenerTotal()

    const handlePagar = () => {
        // Limpiar el carrito y volver a la página de inicio
        limpiarCarrito()
        navigate('/')
    }

    const handleContinuarComprando = () => {
        navigate('/productos')
    }

    return (
        <Fragment>
            <div className="cart-page">
                <div className="cart-page-header">
                    <h1>Carrito de Compras</h1>
                    <button 
                        className="btn-back"
                        onClick={() => navigate('/')}
                    >
                        ← Volver al Inicio
                    </button>
                </div>

                <div className="cart-page-content">
                    {carrito.length === 0 ? (
                        <div className="cart-empty">
                            <div className="empty-cart-icon">
                                <i className="bi bi-cart-x"></i>
                            </div>
                            <h2>Tu carrito está vacío</h2>
                            <p>Agrega algunos productos para comenzar tu compra</p>
                            <button 
                                className="btn-continue-shopping"
                                onClick={handleContinuarComprando}
                            >
                                Ir a Productos
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
                                            <p className="item-category">{producto.categoria}</p>
                                        </div>
                                        <div className="item-controls">
                                            <div className="quantity-controls">
                                                <button 
                                                    className="btn-quantity"
                                                    onClick={() => disminuirCantidad(producto.carritoId)}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity">{producto.cantidad}</span>
                                                <button 
                                                    className="btn-quantity"
                                                    onClick={() => aumentarCantidad(producto.carritoId)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="item-total">
                                                S/ {(producto.precio * producto.cantidad).toFixed(2)}
                                            </div>
                                            <button 
                                                className="btn-remove"
                                                onClick={() => eliminarDelCarrito(producto.carritoId)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <div className="summary-row">
                                    <span>Subtotal ({carrito.reduce((total, item) => total + item.cantidad, 0)} productos):</span>
                                    <span>S/ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Envío:</span>
                                    <span>Gratis</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <span>S/ {total.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="cart-actions">
                                <button 
                                    className="btn-continue-shopping"
                                    onClick={handleContinuarComprando}
                                >
                                    Continuar Comprando
                                </button>
                                <button 
                                    className="btn-pagar"
                                    onClick={handlePagar}
                                >
                                    Proceder al Pago
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default CartPage
