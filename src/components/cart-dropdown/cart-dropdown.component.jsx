import "./cart-dropdown.styles.scss";
import React from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Go TO CheckOut</Button>
      </div>
    </>
  );
};

export default CartDropdown;
