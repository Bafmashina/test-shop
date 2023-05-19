import "./basketItem.scss";

export const BasketItem = () => {
  return (
    <div className="body">
      <div className="wraperCart">
        <h1>Корзина</h1>
        <div className="contentCart">
          <div className="cartComponent">
            <div className="cartContent">
              <div className="itemComponent">
                <img className="itemComponent-img" src="img/card/1.png" alt="" />
                <div >
                  <div>
                    <span className="itemComponent-title">Apple BYZ S852I</span>
                    <b className="itemComponent-title-price">2927 руб</b>
                  </div>
                </div>
                <div>
                  <img className="itemComponent-plus" src="img/basket/plus.png" alt="" />
                </div>
                <sapn className='itemComponent-count'>1</sapn>
                <div>
                  <img className="itemComponent-minus" src="img/basket/minus.png" alt="" />
                </div>
              </div>
            </div>
            <div className="CartBasketDelete">
              <img src="img/basket/delete.png" alt="" />
            </div>
          </div>

          {/* Оплата */}

          <div className="priceComponent">
            <div className="contentPrice-C">
              <div className="price">
                <span>ИТОГО</span>
                <b>2927 руб</b>
              </div>
              <div>
                <button className="buttonPrice">Оплата</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
