import React from "react";
import styles from "./Card.module.scss";

import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../../redux/slice/cartSlice'

export const Card = ({id, title, price, img, rating, }) => {
  const dispatch = useDispatch()
  const countBuy = useSelector(state => state.cart.items.find(obj => obj.id === id))

  const addedCount = countBuy ? countBuy.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
    }
    dispatch(addItem(item))
  }

  return (
    <div className={styles.card}>
      <img width={219.61} height={237.07} src={img} alt="" />
      <p>{title}</p>
      <div>
        <div className={styles.cardItemPrise}>
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        <div className={styles.rating}>
          <img
            width={23.33}
            height={21.93}
            src="/img/rating.png"
            alt=""
          />
          <b>{rating}</b>
          <button  className={styles.button} onClick={onClickAdd}>
            Купить {
              addedCount > 0 && <i className={styles.countBuyItems}>{addedCount}</i>
            }
          </button>
        </div>
      </div>
    </div>
  );
};
