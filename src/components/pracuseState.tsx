"use client";

import { useState } from "react";

export default function useStatePrac() {
  // const val = "helo";
  const [val, setVal] = useState("hi");
  const [val2, setVal2] = useState("bye");

  const onChangeHandler = (e: any) => {
    console.log("e is " + e.target.value);
    setVal(e.target.value);
  };

  const onChangeHandler2 = (e: any) => {
    console.log("e is " + e.target.value);
    setVal2(e.target.value);
  };
  return (
    <div>
      <input type="text" value={val} onChange={onChangeHandler} />
      <br />
      <input type="text" placeholder={val2} onChange={onChangeHandler2} />
      <br />
      Length of val: {val.length}
      <br />
      Length of val2: {val2.length}
    </div>
  );
}
