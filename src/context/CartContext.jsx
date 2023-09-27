import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod=> prod.id === id)
    }

    const addItem = (objVinylToAdd) => {
        if (!isInCart(objVinylToAdd.id)) {
        setCart(prev => [...prev, objVinylToAdd])
        }
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    
    const totalQuantity = getTotalQuantity()

    const removeItem = (id) => {
        const updateCart = cart.filter(prod => prod.id != id)
        setCart(updateCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })

        return total
    }

    const total = getTotal()
    

    return(
        <CartContext.Provider value = {{cart, addItem, totalQuantity, removeItem, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}