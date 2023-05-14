import React from "react";

export const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-25">
      <div className="d-flex align-center">
        <div>
          <h3 className="text-uppercase">QPICK</h3>
        </div>
      </div>

      <ul className="d-flex">
        <li className="hederCart">
          <img width={22} height={20} src="/img/like.png" alt="" />
        </li>
        <li className="headerLike">
          <img width={22} height={20} src="/img/Cart.png" alt="" />
        </li>
      </ul>
    </header>
  );
};
