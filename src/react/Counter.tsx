import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="text-center text-2xl">{counter}</div>
      <div className="flex gap-2">
        <button
          className="border-2 border-black px-2 rounded"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <button
          className="border-2 border-black px-2 rounded"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
