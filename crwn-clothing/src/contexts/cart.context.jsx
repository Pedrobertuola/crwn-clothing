import { createContext, useState } from "react";

export const Cartcontext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    return (
        <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
    )
}