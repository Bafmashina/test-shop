import { CartItem } from "./CartItem";
import "./basketItem.scss";
import {useDispatch, useSelector} from 'react-redux'

export const BasketItem = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  return (
    <div className="body">
      <div className="wraperCart">
        <h1>Корзина</h1>
        <div className="contentCart">
         <div className="LocationCard">

          {
          items.map((item => <div className="md-20"><CartItem key={item.id} {...item}/></div>))
         }

          {/* <CartItem/>
          <CartItem/> */}
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
