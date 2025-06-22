import { React, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">User Reducer Example</h1>
      <div className="flex gap-4 justify-center items-center text-5xl font-bold m-4">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
          className="border-2 h-20 w-29 bg-gray-300 pb-3"
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          className="border-2 h-20 w-29 bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseState;
