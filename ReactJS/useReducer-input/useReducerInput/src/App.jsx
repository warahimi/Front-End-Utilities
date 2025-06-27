import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENTBY: "incrementby",
  DECREMENTBY: "decrementby",
  SETINCREMENT: "setincrement",
  INCREMENTBYINPUT: "incrementbyinput",
  DECREMENTBYINPUT: "decrementbyinput",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ACTIONS.INCREMENTBYINPUT:
      return { ...state, counter: state.counter + state.incrementBy };
    case ACTIONS.DECREMENTBYINPUT:
      return { ...state, counter: state.counter - state.incrementBy };
    case ACTIONS.SETINCREMENT:
      return { ...state, incrementBy: action.payload };
    case ACTIONS.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    incrementBy: 1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-800">React Counter</h1>

        <div className="space-y-2">
          <label
            htmlFor="inc"
            className="block text-lg font-medium text-gray-600"
          >
            Increment / Decrement by:
          </label>
          <input
            type="number"
            id="inc"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-center text-lg"
            value={state.incrementBy}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SETINCREMENT,
                payload: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="text-6xl font-bold text-blue-700">{state.counter}</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <button
            onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            +1
          </button>

          <button
            onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            -1
          </button>

          <button
            onClick={() => dispatch({ type: ACTIONS.INCREMENTBYINPUT })}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl transition col-span-2 sm:col-span-1"
          >
            +Input
          </button>

          <button
            onClick={() => dispatch({ type: ACTIONS.DECREMENTBYINPUT })}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl transition col-span-2 sm:col-span-1"
          >
            -Input
          </button>

          <button
            onClick={() => dispatch({ type: ACTIONS.RESET })}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl transition col-span-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
