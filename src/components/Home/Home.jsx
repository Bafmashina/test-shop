import React from "react";

import { Header } from "../Header";
import { Card } from "../Card/Card";
import { Footer } from "../Footer";
import { Sort } from "../Sort/Sort";
import Skeleton from "../Card/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://648f2d9375a96b664444ca5f.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {/* ВВЕРХ */}
      <div className="content p-40">
        {/* Сортировка */}
        <Sort />

        <h1>Наушники</h1>
        <div className="d-flex mb-40">
          {isLoading
            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
            : items.map((el, i) => (i < 3 ? <Card key={el.id} {...el} /> : ""))}
        </div>

        {/* Вторая тройка */}
        <div className="secondItems">
          <div className="d-flex">
            {isLoading
              ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
              : items.map((el, i) =>
                  i >= 3 && i < 6 ? <Card key={el.id} {...el} /> : ""
                )}
          </div>
        </div>

        {/* НИЗ */}
        <h1>Беспроводные Наушники</h1>
        <div className="d-flex mb-40">

          {isLoading
            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
            : items.map((el, i) =>
                i >= 6 && i <= 9 ? <Card key={el.id} {...el} /> : ""
              )}
        </div>
      </div>
      {/* Футер */}
      <Footer />
    </>
  );
};
