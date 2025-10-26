import React, { createContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const agregarCarrito = (producto) => {
        console.log('=== AGREGANDO PRODUCTO ===');
        console.log('Producto recibido:', producto);
        console.log('ID del producto:', producto.id);
        
        setCarrito((carritoAnterior) => {
            console.log('Carrito anterior:', carritoAnterior);
            console.log('Cantidad de productos en carrito anterior:', carritoAnterior.length);
            
            // Siempre agregar como producto nuevo con ID único
            const productoConIdUnico = { 
                ...producto, 
                cantidad: 1,
                carritoId: Date.now() + Math.random() // ID único para cada elemento del carrito
            };
            const nuevoCarrito = [...carritoAnterior, productoConIdUnico];
            console.log('✅ Producto nuevo agregado:', nuevoCarrito);
            console.log('Nueva cantidad de productos:', nuevoCarrito.length);
            return nuevoCarrito;
        });
    }

    const eliminarDelCarrito = (carritoId) => {
        console.log('=== ELIMINANDO PRODUCTO ===');
        console.log('CarritoId a eliminar:', carritoId);
        setCarrito((carritoAnterior) => {
            const carritoActualizado = carritoAnterior.filter((articulo) => articulo.carritoId !== carritoId);
            console.log('✅ Producto eliminado. Carrito actualizado:', carritoActualizado);
            return carritoActualizado;
        });
    }

    const aumentarCantidad = (carritoId) => {
        setCarrito((carritoAnterior) => 
            carritoAnterior.map((articulo) => 
                articulo.carritoId === carritoId 
                    ? { ...articulo, cantidad: articulo.cantidad + 1 }
                    : articulo
            )
        );
    }

    const disminuirCantidad = (carritoId) => {
        setCarrito((carritoAnterior) => 
            carritoAnterior.map((articulo) => 
                articulo.carritoId === carritoId 
                    ? { 
                        ...articulo, 
                        cantidad: articulo.cantidad > 1 ? articulo.cantidad - 1 : 1 
                    }
                    : articulo
            )
        );
    }

    const obtenerTotalItems = () => {
        return carrito.reduce((total, articulo) => total + articulo.cantidad, 0);
    }

    const obtenerSubtotal = () => {
        return carrito.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0);
    }

    const obtenerTotal = () => {
        // Por ahora el total es igual al subtotal, pero aquí se pueden agregar impuestos, descuentos, etc.
        return obtenerSubtotal();
    }

    const limpiarCarrito = () => {
        setCarrito([]);
        setIsModalOpen(false);
    }

    const cerrarModal = () => {
        setIsModalOpen(false);
    }

    const abrirModal = () => {
        setIsModalOpen(true);
    }

    const value = {
        carrito,
        isModalOpen,
        agregarCarrito,
        eliminarDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        obtenerTotalItems,
        obtenerSubtotal,
        obtenerTotal,
        limpiarCarrito,
        cerrarModal,
        abrirModal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
}

export default CartContext