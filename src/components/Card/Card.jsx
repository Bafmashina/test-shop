import React from "react";
import styles from "./Card.module.scss";

import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../../redux/slice/cartSlice'

export const Card = ({id, title, price, img, rating,onFavorite }) => {
  const dispatch = useDispatch()

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
            onClick={onFavorite}
          />
          <b>{rating}</b>
          <button  className={styles.button} onClick={onClickAdd}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
