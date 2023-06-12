import React from "react";
import "./sort.scss";

export const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0)

  const list = ["Популярности", "цене", "алфавиту"];
  const sortName = list[selected]

  const onClickSortItem = (id) => {
    setSelected(id)
    setOpen(false)
  }

  return (
    <div className="wrapper-sort">
      <div className="sort">
        <b>Сортировать по: </b>
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </div>
      {open && (
        <div className="sort-popup">
          <ul>
            {list.map((name, id) => (
              <li
                key={id}
                onClick={() => onClickSortItem(id)}
                className={selected === id ? "active" : ""}
              >{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
