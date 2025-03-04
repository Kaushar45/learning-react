import { useState } from "react";

function CounterCard() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }
  function decrease() {
    setCount((count) => count - 1);
  }
  return (
    <div
      style={{
        maxWidth: "320px",
        border: "1px solid gray",
        padding: "1.25rem",
      }}
    >
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
export default CounterCard;
