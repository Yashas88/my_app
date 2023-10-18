import React, { useState } from "react";

const TestInterface = () => {

  interface MyComponentState {
    count: number;
    message: string;
  }

  const [state, setState] = useState<MyComponentState>({
    count: 0,
    message: "Hello, World!",
  });

  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  
  return (
    <>
      <h2>Test Interface</h2>

      <p>Count: {state.count}</p>
      <p>Message: {state.message}</p>

      <button onClick={incrementCount}>Increment</button>
    </>
  );
};

export default TestInterface;
