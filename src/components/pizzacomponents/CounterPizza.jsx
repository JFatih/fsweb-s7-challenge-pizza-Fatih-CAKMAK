import React, { useEffect, useState } from "react";
import "../OrderPizza.css";
function CounterPizza({ setPizzaCount, pizzaCount }) {
  const arttır = () => {
    if (pizzaCount > 1) {
      setPizzaCount(pizzaCount - 1);
    }
  };

  const azalt = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="counter-container">
      <button className="button-yellow-left" onClick={arttır} type="button">
        -
      </button>
      <span className="counter">{pizzaCount}</span>
      <button className="button-yellow-right" onClick={azalt} type="button">
        +
      </button>
    </div>
  );
}

export default CounterPizza;
