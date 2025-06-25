import React, { useContext } from "react";
import { NameContext } from "./App";
import ComponentB from "./ComponentB";

function ComponentA() {
  const { name, setName, message, setMessage } = useContext(NameContext);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 min-w-md mt-6 border-2 border-gray-200 p-6 shadow-2xl">
        <h1 className="text-3xl text-center font-bold w-full">ComponentA</h1>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 border-gray-300 p-3 rounded-2xl w-full"
        />
        <h1 className="text-lg">{message}</h1>
        <button
          onClick={() => {
            name !== "" ? setMessage(`Hello  ${name} from ComponentA`) : "";
          }}
          className="border-2 border-gray-300 p-3 rounded-2xl w-full bg-blue-500 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
