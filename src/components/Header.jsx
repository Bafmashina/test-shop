import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

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
          <img width={22} height={20} src="/img/like.png" alt="" />
        </li>
        <Link to={`basket`}>
          {location.pathname !== `/basket` && (
            <div>
              <img width={22} height={20} src="/img/Cart.png" alt="" />
            </div>
          )}
        </Link>
      </ul>
    </header>
  );
};
