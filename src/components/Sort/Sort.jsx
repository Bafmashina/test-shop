import React from "react";
import './sort.scss'

export const Sort = () => {
  return (
    <div className="wrapper-sort">
      <div className="sort">
        <b>Сортировать по: </b>
        <span>Популярности</span>
      </div>
      <div className="sort-popup">
        <ul>
          <li className="active"> Популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};
