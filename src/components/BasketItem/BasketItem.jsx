import { clearItems} from "../../redux/slice/cartSlice";
import { CartButton } from "./CartButton";
import { CartItem } from "./CartItem";
import "./basketItem.scss";
import { useDispatch, useSelector } from "react-redux";

export const BasketItem = ({id}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const onClickClear = () => {
    dispatch(clearItems(id))
  }

  return (
    <div className="body">
      <div className="wraperCart">
        <h1>Корзина</h1>
        <div onClick={onClickClear} className="removeAllItems">
          <button className="removeAllItems-btn">Отчистить корзину</button>
          <img className="removeAllItems-img" src="img/basket/delete.png" alt="" />
        </div>
        <div className="contentCart">
          <div className="LocationCard">
            {items.map((item) => (
              <div className="mb-20">
                <CartItem key={item.id} {...item} />
              </div>
            ))}
          </div>

          {/* Оплата */}

          <CartButton />
        </div>
      </div>
    </div>
  );
};
