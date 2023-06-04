import React from "react";
import { useSelector } from "react-redux";


export const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className="priceComponent">
      <div className="contentPrice-C">
        <div className="basketAllCounts">
        <span>Кол-во товаров</span>
          <b>{totalCount} шт</b>
        </div>
        <div className="price">
          <span>Общая сумма</span>
          <b>{totalPrice} руб</b>
        </div>
        <div>
          <button className="buttonPrice">Оплата</button>
        </div>
      </div>
    </div>
  );
};
