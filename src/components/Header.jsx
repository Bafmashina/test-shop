import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const location = useLocation();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <header className="d-flex justify-between align-center p-25">
      <div className="d-flex align-center">
        <Link to={`/`}>
          <div>
            <h3 className="text-uppercase">QPICK</h3>
          </div>
        </Link>
      </div>

      <ul className="d-flex">
        <li className="hederCart">
          <div className="LiekTotal">
            <img width={22} height={20} src="/img/like.png" alt="" />
            <span className="spanTotalPrice">{totalPrice}</span>
          </div>
        </li>
        <Link to={`basket`}>
          {location.pathname !== `/basket` && (
            <div className="totalItemsCountinCard">
              <img width={22} height={20} src="/img/Cart.png" alt="" />
              <span className="spanItemCount">{items.length}</span>
            </div>
          )}
        </Link>
      </ul>
    </header>
  );
};
