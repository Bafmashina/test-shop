import React from "react";
import "./sort.scss";
import {useSelector, useDispatch} from 'react-redux'
import {setSort} from '../../redux/slice/filterSlice'

export const Sort = () => {
  const dispatch = useDispatch()
  const sort = useSelector((state) => state.filter.sort)

  const [open, setOpen] = React.useState(false);
  const list = [
    { name: "популярности(ВОЗР)", sortProperty: "rating" },
    { name: "популярности(УБВ)", sortProperty: "-rating" },
    { name: "цене(ВОЗР)", sortProperty: "price" },
    { name: "цене(УБВ)", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSortItem = (obj) => {
    dispatch(setSort(obj))
    setOpen(false);
  };

  return (
    <div className="wrapper-sort">
      <div className="sort">
        <b>Сортировать по: </b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort-popup">
          <ul>
            {list.map((obj, id) => (
              <li
                key={id}
                onClick={() => onClickSortItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
