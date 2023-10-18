import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const clear = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Counter : {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default Counter;
