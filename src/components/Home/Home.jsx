import React from "react";

import { Header } from "../Header";
import { Card } from "../Card/Card";
import { Footer } from "../Footer";

import hedphones from "../../assets/hedphones.json";
import hedphones2 from "../../assets/hedphones2.json";

export const Home = () => {
  return (
    <>
      <Header />
      {/* ВВЕРХ */}
      <div className="content p-40">
        <h1>Наушники</h1>
        <div className="d-flex mb-40">
          {hedphones.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              rating={el.rating}
              img={el.img}
              onFavorite={() => console.log("Добавили в закладки")}
              addToCard={() => console.log("Нажали купить")}
            />
          ))}
        </div>

        {/* Вторая тройка */}
        <div className="secondItems">
          <div className="d-flex">
            {hedphones.map((el) => (
              <Card
                title={el.title}
                price={el.price}
                rating={el.rating}
                img={el.img}
                onClickPlus={() => console.log(el)}
              />
            ))}
          </div>
        </div>

        {/* НИЗ */}
        <h1>Беспроводные Наушники</h1>
        <div className="d-flex mb-40">
          {hedphones2.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              rating={el.rating}
              img={el.img}
              onClickPlus={() => console.log(el)}
            />
          ))}
        </div>
      </div>
      {/* Футер */}
      <Footer />
    </>
  );
};