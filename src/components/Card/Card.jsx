import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ title, price, img, rating, addToCard, onFavorite }) => {

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
          <button className={styles.button} onClick={addToCard}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
