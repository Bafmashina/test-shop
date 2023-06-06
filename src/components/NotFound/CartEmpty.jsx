import React from "react";
import { Link} from "react-router-dom";
import './CartEmpty.scss'

export const CartEmpty = () => {
  return (
    <>
      <div className="CartEmpty-Wrap">
        <div className="CartEmpty-main">
          <h1>
            <span>😕</span>
            <br />
            В ваше корзине ничего нет
          </h1>
          <img className="CartEmpty-img" src="img/basket/emptyCard.png" alt=""></img>
          <Link to={'/'}>
            <span className="CartEmpty-back">ВЕРНУТЬСЯ НАЗАД</span>
          </Link>
        </div>
      </div>
    </>
  );
};
