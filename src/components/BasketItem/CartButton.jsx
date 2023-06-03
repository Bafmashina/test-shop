import React from "react";
import { useSelector } from "react-redux";

export const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="priceComponent">
      <div className="contentPrice-C">
        <div className="price">
          <span>ИТОГО</span>
          <b>{totalPrice} руб</b>
        </div>
        <div>
          <button className="buttonPrice">Оплата</button>
        </div>
      </div>
    </div>
  );
};
