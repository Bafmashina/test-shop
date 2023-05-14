import React from "react";

export const Card = ({title, price, img, rating}) => {
  return (
    <div className="card">
      <img width={219.61} height={237.07} src={img} alt="" />
      <p>{title}</p>
      <div>
        <div className="cardItemPrise">
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        <div className="rating">
          <img width={23.33} height={21.93} src="/img/rating.png" alt="" />
          <b>{rating}</b>
          <button className="button">Купить</button>
        </div>
      </div>
    </div>
  );
};
