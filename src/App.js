import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import hedphones from "./assets/hedphones.json";
import hedphones2 from "./assets/hedphones2.json";

function App() {
  return (
    <div className="wrapper clear">
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
              onFavorite={() => console.log('Добавили в закладки')}
              addToCard={() => console.log('Нажали купить')}
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
    </div>
  );
}

export default App;
