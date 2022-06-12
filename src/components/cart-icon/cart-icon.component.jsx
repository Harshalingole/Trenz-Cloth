import "./cart-icon.styles.scss";
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { onCartClick } = useContext(CartContext);

  return (
    <>
      <div className="cart-icon-container">
        <ShoppingIcon className="shopping-icon" onClick={onCartClick} />
        <span className="item-count">0</span>
      </div>
    </>
  );
};

export default CartIcon;
