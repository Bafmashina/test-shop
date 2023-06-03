import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slice/cartSlice";

export const CartItem = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({ 
        id 
      }),
      );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

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
            <div onClick={onClickPlus}>
              <img 
                className="itemComponent-plus"
                src="img/basket/plus.png"
                alt=""
              />
            </div>
            <sapn className="itemComponent-count">{count}</sapn>
            <div onClick={onClickMinus}>
              <img
                className="itemComponent-minus"
                src="img/basket/minus.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div onClick={onClickRemove} className="CartBasketDelete">
          <img className="CartBasketDelete-img" src="img/basket/remove.png" alt="" />
        </div>
      </div>
    </div>
  );
};
