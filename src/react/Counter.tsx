import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button className="border p-2" onClick={() => setCounter(counter + 1)}>
        +1
      </button>
      <button className="border p-2" onClick={() => setCounter(counter - 1)}>
        -1
      </button>
    </div>
  );
}
