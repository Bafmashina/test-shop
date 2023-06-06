import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { BasketItem } from "../components/BasketItem/BasketItem";
import { CartEmpty } from "./NotFound/CartEmpty";

export const Basket = () => {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="wrapper clear">
      <Header />
      {!totalPrice ? <CartEmpty /> : <BasketItem />}
      <Footer />
    </div>
  );
};

export default Basket;
