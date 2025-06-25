import { createContext, useState } from "react";
import ComponentA from "./ComponentA";
export const NameContext = createContext();
function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const contextValues = {
    name,
    setName,
    message,
    setMessage,
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center font-bold p-3 bg-amber-100">
        useContext
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 min-w-md mt-6 border-2 border-gray-200 p-6 shadow-2xl">
        <h1 className="text-3xl text-center font-bold w-full">App Component</h1>
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
            name !== "" ? setMessage(`Hello  ${name} from App Component`) : "";
          }}
          className="border-2 border-gray-300 p-3 rounded-2xl w-full bg-blue-500 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <NameContext.Provider value={contextValues}>
        <ComponentA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
