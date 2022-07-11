import { createContext, useState, useEffect } from "react";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (carItem) => carItem.id === productToAdd.id)
    // If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((carItem) => CartItem.id === productToAdd.id ?
        {...carItem, quantity: carItem.quantity +1}
        : carItem)    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity:1 }]
}

export const Cartcontext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

    return (
        <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
    )
}