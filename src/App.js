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
          <li className="hederCart">
            <img width={22} height={20} src="/img/like.png" />
          </li>
          <li className="headerLike">
            <img width={22} height={20} src="/img/Cart.png" />
          </li>
        </ul>
      </header>
      {/* ВВЕРХ */}
      <div className="content p-40">
        <h1>Наушники</h1>
        <div className="d-flex">
          <div className="card">
            <img width={219.61} height={237.07} src="/img/card/1.png" alt="" />
            <p>Apple BYZ S852I</p>
            <div>
              <div className="cardItemPrise">
                <span>Цена</span>
                <b>2927 руб.</b>
              </div>
              <div className="rating">
                <img
                  width={23.33}
                  height={21.93}
                  src="/img/rating.png"
                  alt=""
                />
                <b>4.7</b>
                <button className="button">Купить</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={219.61} height={237.07} src="/img/card/2.png" alt="" />
            <p>Apple BYZ S852I</p>
            <div>
              <div className="cardItemPrise">
                <span>Цена</span>
                <b>2927 руб.</b>
              </div>
              <div className="rating">
                <img
                  width={23.33}
                  height={21.93}
                  src="/img/rating.png"
                  alt=""
                />
                <b>4.7</b>
                <button className="button">Купить</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={219.61} height={237.07} src="/img/card/3.png" alt="" />
            <p>Apple BYZ S852I</p>
            <div>
              <div className="cardItemPrise">
                <span>Цена</span>
                <b>2927 руб.</b>
              </div>
              <div className="rating">
                <img
                  width={23.33}
                  height={21.93}
                  src="/img/rating.png"
                  alt=""
                />
                <b>4.7</b>
                <button className="button">Купить</button>
              </div>
            </div>
          </div>
          {/* Вторая тройка */}
        </div>
        {/* НИЗ */}
        <h1>Беспроводные Наушники</h1>
        <div className="hedPhones">
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
                  <img
                    width={23.33}
                    height={21.93}
                    src="/img/rating.png"
                    alt=""
                  />
                  <b>4.7</b>
                  <button className="button">Купить</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={219.61} height={237.07} src="/img/card2/2.png" alt="" />
            <p>Apple AirPods</p>
            <div>
              <div className="cardItemPrise">
                <span>Цена</span>
                <b>9527 руб.</b>
              </div>
              <div className="rating">
                <div>
                  <img
                    width={23.33}
                    height={21.93}
                    src="/img/rating.png"
                    alt=""
                  />
                  <b>4.7</b>
                  <button className="button">Купить</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={219.61} height={237.07} src="/img/card2/3.png" alt="" />
            <p>Apple AirPods</p>
            <div>
              <div className="cardItemPrise">
                <span>Цена</span>
                <b>9527 руб.</b>
              </div>
              <div className="rating">
                <div>
                  <img
                    width={23.33}
                    height={21.93}
                    src="/img/rating.png"
                    alt=""
                  />
                  <b>4.7</b>
                  <button className="button">Купить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}

      <footer className="footer">
        <div className="foterLogo">
          <div>
            <h3>QPICK</h3>
          </div>
        </div>
        <div className="footerUL">
          <ul>
            <p className="footerUL-1">Избранное</p>
            <p className="footerUL-2">Корзина</p>
            <p className="footerUL-3">Контакты</p>
          </ul>
        </div>

        <div className="footerLang">
          <p className="footerLang-1">Условия сервиса</p>
          <div className="footerLangLow">
            <p className="footerLang-2">Рус</p>
            <p className="footerLang-3">Eng</p>
          </div>
        </div>

        <div>
          <ul className="footerIcons-Ul">
            <li className="footerIcons-Ul-1">
              <img src="/img/footer/1.png" alt="" />
            </li>
            <li className="footerIcons-Ul-2">
              <img src="/img/footer/2.png" alt="" />
            </li>
            <li className="footerIcons-Ul-3">
              <img src="/img/footer/3.png" alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
