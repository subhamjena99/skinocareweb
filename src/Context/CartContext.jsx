'use client'

import { createContext, useState } from "react";

// CREATING CONTEXT API
export const CartContext = createContext(null);

const CartContextWrapper = (props) => {

    // DECLARING STATE FOR DATA TO BE MANAGED
    const [data, setData] = useState(0);

    return (
        // PASSING DATA STATE GETTER & SETTER AS CONTEXT VALUE
        <CartContext.Provider value={[data, setData]}>
            {/* WRAPPING UP CHILD COMPONENT INSIDE CONTEXT */}
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextWrapper;