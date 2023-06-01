import React from "react";

export const CartItem = ({ id, img, title, price, count }) => {
  return (
    <div className="mb20">
      <div className="cartComponent">
        <div className="cartContent">
          <div className="itemComponent">
            <img className="itemComponent-img" src={img} alt="" />
            <div>
              <div>
                <span className="itemComponent-title">{title}</span>
                <b className="itemComponent-title-price">{price * count} руб</b>
              </div>
            </div>
            <div>
              <img
                className="itemComponent-plus"
                src="img/basket/plus.png"
                alt=""
              />
            </div>
            <sapn className="itemComponent-count">1</sapn>
            <div>
              <img
                className="itemComponent-minus"
                src="img/basket/minus.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="CartBasketDelete">
          <img src="img/basket/delete.png" alt="" />
        </div>
      </div>
    </div>
  );
};
