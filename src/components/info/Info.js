import style from "./Info.module.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";

function Info({ decrement, increment, food }) {
  const [isRotating, setIsRotating] = useState(0);
  const rotationFunc = () => {
    if (isRotating === 0) {
      setIsRotating(1);
    }
    setTimeout(() => {
      setIsRotating(0);
    }, 500);
    clearTimeout();
  };

  return (
    <div className={`${style["info"]}`}>
      <div className="container">
        <div className={`${style["info-container"]}`}>
          <div
            className={`${style["food-info"]} ${
              isRotating ? style.isScaling : ""
            }`}
          >
            <h1 style={{ color: `${food.color}` }}>{food.price}</h1>
            <h3 className={style["food-name"]}>{food.name}</h3>
            <p>{food.desc}</p>
            <button
              style={{ backgroundColor: `${food.color}` }}
              className={`${style["order-btn"]}`}
            >
              order now
            </button>
          </div>
          <div className={`${style["midd-spinner"]}`}>
            <div
              className={`${style["main-spinner"]} ${
                isRotating ? style.rotatingItem : ""
              }`}
            >
              <img src={food.url} alt={food.name} />
            </div>
            <div className={`${style["spinner-btns"]}`}>
              <BsFillArrowDownCircleFill
                onClick={() => {
                  increment();
                  rotationFunc();
                }}
                className={`${style.btn}`}
                style={{ color: `${food.color}` }}
              />
              <BsFillArrowDownCircleFill
                onClick={() => {
                  decrement();
                  rotationFunc();
                }}
                className={`${style.btn}`}
                style={{ color: `${food.color}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
