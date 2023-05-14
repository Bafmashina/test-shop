import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <img width={219.61} height={237.07} src="/img/card/1.png" alt="" />
      <p>Apple BYZ S852I</p>
      <div>
        <div className="cardItemPrise">
          <span>Цена</span>
          <b>2927 руб.</b>
        </div>
        <div className="rating">
          <img width={23.33} height={21.93} src="/img/rating.png" alt="" />
          <b>4.7</b>
          <button className="button">Купить</button>
        </div>
      </div>
    </div>
  );
};
