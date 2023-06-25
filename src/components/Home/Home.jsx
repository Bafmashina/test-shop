import React from "react";
import axios from "axios";
import qs from 'qs'
import {useNavigate} from 'react-router-dom'

import { Header } from "../Header";
import { Card } from "../Card/Card";
import { Footer } from "../Footer";
import { Sort } from "../Sort/Sort";
import Skeleton from "../Card/Skeleton";
import { useSelector } from "react-redux";

export const Home = () => {
  const navigate = useNavigate()
  const sortType = useSelector((state) => state.filter.sort.sortProperty)

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      console.log(params)
    }
  }, [])

  React.useEffect(() => {

    const order = sortType.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.replace('-', '')

    axios.get(`https://648f2d9375a96b664444ca5f.mockapi.io/items?&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [sortType]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType
    })

    navigate(`?${queryString}`)
  }, [sortType])

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
