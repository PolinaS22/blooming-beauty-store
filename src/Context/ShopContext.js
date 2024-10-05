import React from "react";
import { dataProducts } from "../Shop/dataProducts";

import { useSelector } from "react-redux";
import { getCartItems } from "../ReduxComponents/Redux/cartSlice";

export const ShopContext = React.createContext(null);

export const ShopContextProvider = (props) => {
    const cartItems = useSelector(getCartItems);

    const contextValue = {dataProducts, cartItems};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

