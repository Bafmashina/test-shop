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
                <img src="img/card/1.png" alt="" />
                <div>
                  <div>
                    <span>Apple BYZ S852I</span>
                    <b>2927 руб</b>
                  </div>
                </div>
                <div>
                  <img src="img/basket/plus.png" alt="" />
                </div>
                <img src="img/basket/minus.png" alt="" />
                <div></div>
              </div>
            </div>
            <div>
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
