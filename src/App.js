function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-25">
        <div className="d-flex align-center">
          <div>
            <h3 className="text-uppercase">QPICK</h3>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-35">
            <img width={22} height={20} src="/img/like.png" />
          </li>
          <li>
            <img width={22} height={20} src="/img/Cart.png" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1>Наушники</h1>
        <div className="card">
          <img width={219.61} height={237.07} src="/img/card/1.png" alt="" />
          <p>Apple BYZ S852I</p>
          <div>
            <div className="cardItemPrise">
              <span>Цена</span>
              <b>2927 руб.</b>
            </div>
            <div className="rating">
              <img width={23.33} height={21.93} src="/img/rating.png" alt="" />
              <b>4.7</b>
              <button className="button">Купить</button>
            </div>
          </div>
        </div>

        <h1>Беспроводные Наушники</h1>
        <div className="card">
          <img width={219.61} height={237.07} src="/img/card2/1.png" alt="" />
          <p>Apple AirPods</p>
          <div>
            <div className="cardItemPrise">
              <span>Цена</span>
              <b>9527 руб.</b>
            </div>
            <div className="rating">
              <div>
                <img width={23.33} height={21.93} src="/img/rating.png" alt="" />
                <b>4.7</b>
              <button className="button">Купить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
