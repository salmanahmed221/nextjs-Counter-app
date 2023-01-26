"use client";

import { useState } from "react";

export default function AdvaceCounterApp() {
  const [val, setVal] = useState(0);
  const decrement = (kitnadecorincre: any) => {
    setVal(val - kitnadecorincre);
  };
  const increment = (kitnadecorincre: any) => {
    setVal(val + kitnadecorincre);
  };
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Advance Counter App
      </h1>
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => decrement(3)}
      >
        decrement by 3
      </button>
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => decrement(2)}
      >
        decrement by 2
      </button>
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => decrement(1)}
      >
        decrement by 1
      </button>
      {val}
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => increment(1)}
      >
        increment by 1
      </button>
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => increment(2)}
      >
        increment by 2
      </button>
      <button
        style={{ backgroundColor: "lightsalmon" }}
        onClick={() => increment(3)}
      >
        increment by 3
      </button>
    </div>
  );
}
