import { createContext, useState } from "react";

export const CartContext = createContext({
  cartClick: false,
  onCartClick: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartClick, setCartClick] = useState(false);
  const onCartClick = () => {
    setCartClick((prev) => !prev);
  };
  const value = { cartClick, onCartClick, setCartClick };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
