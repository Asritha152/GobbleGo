import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

 /* const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };*/

  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
