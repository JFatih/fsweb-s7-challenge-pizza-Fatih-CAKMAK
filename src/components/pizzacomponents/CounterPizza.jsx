import React, { useState } from "react";
import "../OrderPizza.css";
function CounterPizza() {
  const [adet, setAdet] = useState(1);

  const decreaseQuantity = () => {
    if (adet > 1) {
      setAdet(adet - 1);
    }
  };

  const increaseQuantity = () => {
    setAdet(adet + 1);
  };

  return (
    <div className="counter-container">
      <button className="button-yellow-left" onClick={decreaseQuantity}>
        -
      </button>
      <span className="counter">{adet}</span>
      <button className="button-yellow-right" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default CounterPizza;
