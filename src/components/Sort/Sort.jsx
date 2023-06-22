import React from "react";
import "./sort.scss";

export const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const list = [
    { name: "популярности(ВОЗР)", sortProperty: "rating" },
    { name: "популярности(УБВ)", sortProperty: "-rating" },
    { name: "цене(ВОЗР)", sortProperty: "price" },
    { name: "цене(УБВ)", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSortItem = (id) => {
    onChangeSort(id);
    setOpen(false);
  };

  return (
    <div className="wrapper-sort">
      <div className="sort">
        <b>Сортировать по: </b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort-popup">
          <ul>
            {list.map((obj, id) => (
              <li
                key={id}
                onClick={() => onClickSortItem(obj)}
                className={value.sortProperty === obj.sortProperty ? "active" : ""}
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
