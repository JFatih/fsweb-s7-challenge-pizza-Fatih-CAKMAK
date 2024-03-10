import React, { useState } from "react";

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
    <div>
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
