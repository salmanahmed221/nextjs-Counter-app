"use client";
import { useState } from "react";

export default function CounterApp() {
  const [val, setVal] = useState(0);
  const decrement = () => {
    setVal(val - 1);
  };
  const increment = () => {
    setVal(val + 1);
  };
  return (
    <div>
      <h1 style={{ color: "gold", backgroundColor: "gray" }}>Counter App</h1>
      <button style={{ backgroundColor: "lightgreen" }} onClick={decrement}>
        decrement
      </button>
      {val}
      <button style={{ backgroundColor: "lightgreen" }} onClick={increment}>
        increment
      </button>
    </div>
  );
}
