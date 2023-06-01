import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { BasketItem } from "../components/BasketItem/BasketItem";

export const Basket = () => {
  return (
    <div className="wrapper clear">
      <Header />
      <BasketItem />
      <Footer/>
    </div>
  );
};

export default Basket;
