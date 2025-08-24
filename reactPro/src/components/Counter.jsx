import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }
  return (
    <>
      <h1>Count value : {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
