import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (itemARemover) =>{
        setCart(cart.filter((item) => item.name !== itemARemover.name))
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}