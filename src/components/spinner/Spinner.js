import style from "./Spinner.module.css";
import { foods } from "../../data";
import { useState } from "react";

function Spinner({ counter, index }) {
  const [foodsItem, setFoodsItem] = useState(foods);
  return (
    <div
      style={{ backgroundColor: `${foodsItem[index].bgColor}` }}
      className={`${style["spinner-bg"]}`}
    >
      <ul
        className={`${style["spinner"]}`}
        style={{
          transform: `translateY(50%) rotate(${-(36 * counter + 5)}deg)`,
        }}
      >
        {foodsItem.map((item, index) => {
          const { id, name, url } = item;
          return (
            <li key={id} className={`${style["foods-item"]}`}>
              <img src={url} alt={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Spinner;
