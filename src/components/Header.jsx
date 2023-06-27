import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const location = useLocation();
  const isMounted = React.useRef(false)

  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  React.useEffect(() => {
    if(isMounted.current) {
      const json = JSON.stringify(items)
    localStorage.setItem('cart', json)
    }

    isMounted.current = true
  }, [items])

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
              <span className="spanItemCount">{totalCount}</span>
            </div>
          )}
        </Link>
      </ul>
    </header>
  );
};
